import React from 'react'

type Props = {}

const CartTable = (props: Props) => {
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>
        <img src="" alt="" />
        <span>내용</span>
      </td>
      <td>인원</td>
      <td>4,572,000원</td>
      <td>-</td>
    </tr>
  )
}

export default CartTable
