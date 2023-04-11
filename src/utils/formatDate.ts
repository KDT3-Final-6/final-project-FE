const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const datetime = `${year}-${month < 10 ? '0' + month : month}-${
    day < 10 ? '0' + day : day
  } ${hours}:${minutes}`
  return datetime
}

export default formatDate
