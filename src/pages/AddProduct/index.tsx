import Title from '@src/components/common/Title'
import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'

interface Props {}

const AddProduct = (props: Props) => {
  return (
    <div style={{ backgroundColor: COLORS.cf3f3f3 }}>
      <Inner>
        <Title fontSize={FONTSIZE.fz32}>
          <h1>상품 추가</h1>
        </Title>
        <table>
          <thead>
            <tr>
              <td>으아아</td>
            </tr>
          </thead>
        </table>
      </Inner>
    </div>
  )
}

export default AddProduct
