type onCopyFn = (text: string) => Promise<boolean>

function useCopyClipBoard(): onCopyFn {
  const onCopy: onCopyFn = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      alert('주소를 복사하였습니다.')
      return true
    } catch (error) {
      console.error(error)

      return false
    }
  }

  return onCopy
}

export default useCopyClipBoard
