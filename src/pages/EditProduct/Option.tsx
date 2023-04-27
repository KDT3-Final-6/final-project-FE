import React from 'react'
import Button from '@src/components/common/Button'
import { COLORS, FONTSIZE } from '@src/styles/root'
import styled from 'styled-components'
import { IProductDetail } from '@src/interfaces/product'
import { MdOutlineCancel } from 'react-icons/md'
import { useForm, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDeleteProductOptionMutation } from '@src/reduxStore/api/adminProductApiSlice'
import { useDispatch } from 'react-redux'
import { setModal } from '@src/reduxStore/modalSlice'
import { useNavigate } from 'react-router-dom'

interface Props {
  product: IProductDetail
}

const Option = ({ product }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const schema = yup.object().shape({
    optionName: yup.string().min(5, '다섯 글자 이상 작성해 주세요.'),
    // .required('옵션 이름을 입력해 주세요.'),
    startDate: yup.string(),
    endDate: yup.string(),
    startAirline: yup.string(),
    startAirlineTime1: yup.string(),
    startAirlineTime2: yup.string(),
    endAirline: yup.string(),
    endAirlineTime1: yup.string(),
    endAirlineTime2: yup.string(),
    maximumQuantity: yup.number(),
    minimumQuantity: yup.number(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (data: FieldValues) => {
    console.log(data)
  }

  const [deleteOption] = useDeleteProductOptionMutation()
  const deleteHandler = (optionId: number) => {
    dispatch(
      setModal({
        isOpen: true,
        text: '옵션을 삭제하시겠습니까?',
        onClickOK: () => {
          deleteOption(optionId)
          dispatch(
            setModal({
              isOpen: false,
            })
          )
        },
        onClickCancel: () => {
          dispatch(setModal({ isOpen: false }))
        },
      })
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ProductTableStyle>
        <colgroup>
          <col width="20%" />
        </colgroup>
        <tbody>
          <tr>
            <th>옵션 이름</th>
            <td colSpan={6}>
              <input
                type="text"
                placeholder="옵션 이름을 입력해 주세요."
                {...register('optionName')}
              />
            </td>
          </tr>
          <tr>
            <th>여행 기간</th>
            <TravelDateStyle>
              <div>
                <span>출발</span>
                <input type="text" placeholder="YYYY/MM/DD" {...register('startDate')} />
              </div>
              <div>
                <span>도착</span>
                <input type="text" placeholder="YYYY/MM/DD" {...register('endDate')} />
              </div>
            </TravelDateStyle>
          </tr>
          <tr>
            <th>항공 정보</th>
            <TravelDateStyle>
              <TravelStartStyle>
                <span>출발</span>
                <div>
                  <span>항공사</span>
                  <input
                    type="text"
                    placeholder="항공사 이름 입력해 주세요."
                    {...register('startAirline')}
                  />
                  <div>
                    <span>비행 시간</span>
                    <div>
                      <input type="text" placeholder="00:00" {...register('startAirlineTime1')} />
                      ~ <input type="text" placeholder="00:00" {...register('startAirlineTime2')} />
                    </div>
                  </div>
                </div>
              </TravelStartStyle>
              <TravelStartStyle>
                <span>도착</span>
                <div>
                  <span>항공사</span>
                  <input
                    type="text"
                    placeholder="항공사 이름 입력해 주세요."
                    {...register('endAirline')}
                  />
                  <div>
                    <span>비행 시간</span>
                    <div>
                      <input type="text" placeholder="00:00" {...register('endAirlineTime1')} />
                      ~ <input type="text" placeholder="00:00" {...register('endAirlineTime2')} />
                    </div>
                  </div>
                </div>
              </TravelStartStyle>
            </TravelDateStyle>
          </tr>
          <tr>
            <th>최소/최대 옵션 선택양</th>
            <td colSpan={6}>
              <ThumbnailStyle>
                <label htmlFor="option-max">
                  최대 <input type="text" id="option-max" {...register('maximumQuantity')} />
                </label>
                <label htmlFor="option-min">
                  최소 <input type="text" id="option-min" {...register('minimumQuantity')} />
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
                      <MdOutlineCancel
                        onClick={() => deleteHandler(option.periodOptionId)}
                        style={{ cursor: 'pointer' }}
                      />
                    </div>
                  ))}
              </OptionBoxStyle>
            </td>
          </tr>
        </tbody>
      </ProductTableStyle>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button margin="20px 0" buttonType="cartSkyBlue" type="submit">
          옵션 추가
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

const ThumbnailStyle = styled.div`
  display: flex;
  gap: 10px;
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

const TravelDateStyle = styled.td`
  display: flex;
  gap: 10px;
`

const TravelStartStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    > div {
      display: flex;
      flex-direction: column;
      gap: 5px;
      > div {
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
  }
`
export default Option
