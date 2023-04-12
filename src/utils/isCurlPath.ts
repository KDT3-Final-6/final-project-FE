import { useLocation } from 'react-router-dom'

const isCurPath = (path: string) => {
  const { pathname } = useLocation()
  if (pathname.includes(path)) return true
  else return false
}

export default isCurPath
