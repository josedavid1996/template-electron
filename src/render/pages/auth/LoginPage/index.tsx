import React, { useState } from 'react'
import { toast } from 'react-toastify'

import { gqlFetch } from '@render/api'
import useForm from '@render/hooks/useForm'
import { isEmpty } from '@render/utils/isEmpty'
// import { loginAction } from '@render/store/auth'
// import { musicStore } from '@render/store/music'

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { values, ...form } = useForm({
    initialValues: {
      username: '',
      password: '',
      uuid: '1'
    }
  })

  const handleSubmit = async () => {
    if (isEmpty(values.username) || isEmpty(values.password)) {
      return toast.warning('Todos los campos son obligatorios')
    }

    setIsLoading(true)
    const res = await gqlFetch
      .LoginStore({ input: values })
      .finally(() => setIsLoading(false))

    if (!res.loginStore.data && res.loginStore.errors) {
      return toast.warning(res.loginStore.errors[0].message)
    }

    const store = res.loginStore.data!

    localStorage.setItem('token', store.token!)
    localStorage.setItem('@Store', JSON.stringify(store))

    // loginAction(store)
    // musicStore.init()
  }

  return (
    <div className="relative grid h-screen place-items-center bg-login">
      login
    </div>
  )
}

export default LoginPage
