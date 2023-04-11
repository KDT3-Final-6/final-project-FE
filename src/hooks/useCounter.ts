import { useState } from 'react'

function useCounter(initQuantity: number) {
  const [quantity, setQuantity] = useState(initQuantity)
  const minusQuantity = () => {
    quantity > 1 ? setQuantity((prev) => prev - 1) : 1
  }

  const plusQuantity = () => {
    setQuantity((prev) => prev + 1)
  }
  return { quantity, minusQuantity, plusQuantity }
}

export default useCounter
