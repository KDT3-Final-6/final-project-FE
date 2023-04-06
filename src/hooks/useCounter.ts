import { useState } from 'react'

function useCounter() {
  const [quantity, setQuantity] = useState(1)
  const minusQuantity = () => {
    quantity > 1 ? setQuantity((prev) => prev - 1) : 1
  }

  const plusQuantity = () => {
    setQuantity((prev) => prev + 1)
  }
  return { quantity, minusQuantity, plusQuantity }
}

export default useCounter
