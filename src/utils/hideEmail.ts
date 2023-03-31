function hideEmail(str: string) {
  if (str.length > 3) {
    const hiddenChars = str.substring(3).replace(/./g, '*')
    return str.substring(0, 3) + hiddenChars
  } else {
    return str
  }
}

export default hideEmail
