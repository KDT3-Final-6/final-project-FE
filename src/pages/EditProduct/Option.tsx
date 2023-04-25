import React from 'react'
import Button from '@src/components/common/Button'
import { COLORS, FONTSIZE } from '@src/styles/root'
import styled from 'styled-components'
import { IProductDetail } from '@src/interfaces/product'
import { MdOutlineCancel } from 'react-icons/md'

interface Props {
  product: IProductDetail
}

const Option = ({ product }: Props) => {
  return (
    <form>
      <ProductTableStyle>
        <colgroup>
          <col width="20%" />
        </colgroup>
        <tbody>
          <tr>
            <th>옵션</th>
            <td colSpan={6}>
              <OptionsStyle>
                <OptionNameStyle>
                  <label htmlFor="option-name">옵션명</label>
                  <input type="text" id="option-name" />
                </OptionNameStyle>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <ColFlexStyle>
                    <label htmlFor="">
                      출발 날짜 <input type="text" placeholder="YYYY.MM.DD" />
                    </label>
                    <label htmlFor="">
                      출발 시간{' '}
                      <select name="" id="">
                        <option value="am">AM</option>
                        <option value="pm">PM</option>
                      </select>{' '}
                      <input type="text" />
                    </label>
                  </ColFlexStyle>
                  <div>
                    <ColFlexStyle>
                      <label htmlFor="">
                        도착 날짜 <input type="text" placeholder="YYYY.MM.DD" />
                      </label>
                      <label htmlFor="">
                        도착 시간{' '}
                        <select name="" id="">
                          <option value="am">AM</option>
                          <option value="pm">PM</option>
                        </select>{' '}
                        <input type="text" />
                      </label>
                    </ColFlexStyle>
                  </div>
                </div>
              </OptionsStyle>
            </td>
          </tr>
          <tr>
            <th>최소/최대 옵션 선택양</th>
            <td colSpan={6}>
              <ThumbnailStyle>
                <label htmlFor="option-max">
                  최대 <input type="text" id="option-max" />
                </label>
                <label htmlFor="option-min">
                  최소 <input type="text" id="option-min" />
                </label>
              </ThumbnailStyle>
            </td>
          </tr>
          <tr>
            <th>추가된 옵션</th>
            <td>
              <OptionBoxStyle>
                {product?.periodOptions.length > 0 &&
                  product?.periodOptions.map((option) => (
                    <div key={option.periodOptionId}>
                      <span>{option.periodOptionName}</span> <span>출발일: {option.startDate}</span>
                      <MdOutlineCancel />
                    </div>
                  ))}
              </OptionBoxStyle>
            </td>
          </tr>
        </tbody>
      </ProductTableStyle>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button margin="20px 0" buttonType="cartSkyBlue">
          옵션 추가 및 수정
        </Button>
      </div>
    </form>
  )
}

const ProductTableStyle = styled.table`
  width: 100%;
  th {
    background-color: ${COLORS.cd5dae8};
    border: 1px solid ${COLORS.white};
    vertical-align: middle;
    padding: 10px 0;
  }
  td {
    background-color: ${COLORS.white};
    border: 1px solid ${COLORS.cd5dae8};
    vertical-align: middle;
    padding: 10px;
    input[type='text'],
    input[type='number'] {
      border: 1px solid ${COLORS.cd5dae8};
      height: 27px;
      padding: 10px;
    }
    input[type='file'] {
      display: none;
    }
    input[type='file'] + label {
      width: 251px;
      height: 199px;
      background-color: ${COLORS.cd9d9d9};
      color: ${COLORS.white};
      font-size: ${FONTSIZE.fz26};
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
`
const OptionsStyle = styled.div`
  display: flex;
  flex-direction: column;
`

const ThumbnailStyle = styled.div`
  display: flex;
  gap: 10px;
`

const OptionNameStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  input {
    width: 300px;
  }
`

const OptionBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    svg {
      margin: 0;
    }
  }
`
const ColFlexStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export default Option
