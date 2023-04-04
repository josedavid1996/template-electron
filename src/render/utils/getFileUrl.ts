export const getFileUrl = async (awsId: string, isDefault: boolean = false) => {
  const buffer = await window.api.getFile(
    isDefault ? `main/${awsId}` : `downloads/${awsId}`
  )
  const blob = new Blob([buffer])
  return URL.createObjectURL(blob)
}
