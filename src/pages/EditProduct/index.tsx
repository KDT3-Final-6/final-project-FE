import Title from '@src/components/common/Title'
import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE } from '@src/styles/root'
import React, { useState } from 'react'
import styled from 'styled-components'
import { IoIosCloseCircle } from 'react-icons/io'
import Image from '@src/components/common/Image'
import categories from '../../../public/mockData/category.json'
import Button from '@src/components/common/Button'

type Props = {}

const index = (props: Props) => {
  const [attachment, setAttachment] = useState('')
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event
    const theFile = files![0]
    const reader = new FileReader()
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      }: any = finishedEvent
      setAttachment(result)
    }
    reader.readAsDataURL(theFile)
  }
  return (
    <div style={{ backgroundColor: COLORS.cf3f3f3, padding: '32px 0' }}>
      <Inner>
        <Title fontSize={FONTSIZE.fz32} margin="0 0 32px 0">
          <h1>상품 수정</h1>
        </Title>
        <ProductTableStyle>
          <colgroup>
            <col width="20%" />
          </colgroup>
          <tr>
            <th scope="row">상품명</th>
            <td colSpan={6}>
              <input type="text" placeholder="상품명을 입력해 주세요." />
            </td>
          </tr>
          <tr>
            <th scope="row">상품 썸네일 등록</th>
            <td colSpan={6}>
              <ThumbnailStyle>
                <input
                  type="file"
                  accept="image/gif,image/jpeg,image/png,image/jpg"
                  name="thumbnail"
                  id="thumbnail"
                  onChange={onFileChange}
                />
                <label htmlFor="thumbnail">+</label>
                {attachment && (
                  <Image bgImage={attachment} width="251px" height="199px">
                    <button onClick={() => setAttachment('')}>
                      <IoIosCloseCircle size="30" color="gray" />
                    </button>
                  </Image>
                )}
              </ThumbnailStyle>
            </td>
          </tr>
          <tr>
            <th scope="row" colSpan={7}>
              상품 카테고리
            </th>
          </tr>
          <tr>
            <th scope="row">그룹별</th>
            <td colSpan={6}>
              <CategoryStyle>
                {categories[0].child.map((group) => (
                  <CategoryInputStyle>
                    <input type="checkbox" id={String(group.categoryId)} />
                    <label htmlFor={String(group.categoryId)}>{group.categoryName}</label>
                  </CategoryInputStyle>
                ))}
              </CategoryStyle>
            </td>
          </tr>
          <tr>
            <th>테마별</th>
            <td colSpan={6}>
              <CategoryStyle>
                {categories[2].child.map((theme) => (
                  <CategoryInputStyle>
                    <input type="checkbox" id={String(theme.categoryId)} />
                    <label htmlFor={String(theme.categoryId)}>{theme.categoryName}</label>
                  </CategoryInputStyle>
                ))}
              </CategoryStyle>
            </td>
          </tr>
          <tr>
            <th>지역별</th>
            <div>
              {categories[1].child.map((district) => (
                <td>
                  <CategoryInputStyle>
                    <input type="checkbox" id={String(district.categoryId)} />
                    <label htmlFor={String(district.categoryId)}>{district.categoryName}</label>
                    <ColFlexStyle>
                      {district.child.map((country) => (
                        <CategoryInputStyle>
                          <input type="checkbox" id={String(country.categoryId)} />
                          <label htmlFor={String(country.categoryId)}>{country.categoryName}</label>
                        </CategoryInputStyle>
                      ))}
                    </ColFlexStyle>
                  </CategoryInputStyle>
                </td>
              ))}
            </div>
          </tr>
          <tr>
            <th>가격</th>
            <td colSpan={6}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <input type="number" placeholder="숫자만 입력해 주세요" /> 원
              </div>
            </td>
          </tr>
          <tr>
            <th>판매 상태</th>
            <td colSpan={6}>
              <StatusBoxStyle>
                <StatusStyle>
                  <input type="radio" id="sale" name="product-state" />
                  <label htmlFor="sale">판매 중</label>
                </StatusStyle>
                <StatusStyle>
                  <input type="radio" id="soldout" name="product-state" />
                  <label htmlFor="soldout">판매 중지</label>
                </StatusStyle>
              </StatusBoxStyle>
            </td>
          </tr>
          <tr>
            <th>간략 설명</th>
            <td colSpan={6}>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <th>여행하는 나라</th>
            <td colSpan={6}>
              <input type="text" />
            </td>
          </tr>

          <tr>
            <th>항공사</th>
            <td colSpan={6}>
              <input type="text" />
            </td>
          </tr>
        </ProductTableStyle>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button margin="20px 0" buttonType="cartSkyBlue">
            상품 수정
          </Button>
        </div>
        <ProductTableStyle>
          <colgroup>
            <col width="20%" />
          </colgroup>
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
        </ProductTableStyle>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button margin="20px 0" buttonType="cartSkyBlue">
            옵션 추가 및 수정
          </Button>
        </div>
      </Inner>
    </div>
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

const CategoryStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const CategoryInputStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  input[type='checkbox'] {
    width: 20px;
    height: 20px;
  }
  input[type='radio'] {
    width: 20px;
    height: 20px;
  }
`

const ColFlexStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const ThumbnailStyle = styled.div`
  display: flex;
  gap: 10px;
`

const StatusBoxStyle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

const StatusStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  label {
    width: 150px;
  }
`

const OptionsStyle = styled.div`
  display: flex;
  flex-direction: column;
`

const OptionNameStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  input {
    width: 300px;
  }
`

export default index
