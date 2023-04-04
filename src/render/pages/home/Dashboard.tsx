import InputFloat from '@render/components/shared/InputFloat'
import useForm from '@render/hooks/useForm'
import React, { useEffect, useRef, useState } from 'react'

import Keyboard from 'react-simple-keyboard'
import 'react-simple-keyboard/build/css/index.css'

const Dashboard = () => {
  const [estadoInput, setEstadoInput] = useState('email')
  const { values, ...form } = useForm({
    initialValues: {
      email: '',
      password: ''
    }
  })
  const keyboard = useRef(null)

  useEffect(() => {
    keyboard.current.clearInput()
  }, [estadoInput])

  const onChange = (input) => {
    if (estadoInput === 'email') {
      form.setField('email', input)
    }
    if (estadoInput === 'password') {
      form.setField('password', input)
    }
  }

  // const onKeyPress = (button) => {
  //   console.log('Button pressed', button)
  // }

  return (
    <>
      <div className="min-h-screen fondo  relative w-full">
        <div className="absolute w-[90%] bottom-4 left-0 right-0 mx-auto">
          <form className="flex flex-col justify-center gap-5">
            <InputFloat
              label="Email"
              {...form.inputProps('email')}
              onFocus={() => setEstadoInput('email')}
            />
            <InputFloat
              label="Password"
              {...form.inputProps('password')}
              onFocus={() => setEstadoInput('password')}
            />
          </form>
          <Keyboard
            keyboardRef={(r) => (keyboard.current = r)}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  )
}

export default Dashboard
