const extractDateTime = (datetimeStr: string) => {
  const [date, time] = datetimeStr.split('T')
  const [hour, minute] = time.split(':').slice(0, 2)
  return { date, time: `${hour}:${minute}` }
}

export default extractDateTime
