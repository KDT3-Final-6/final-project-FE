import Title from '@src/components/common/Title'
import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'

interface Props {}

const AddProduct = (props: Props) => {
  return (
    <div style={{ backgroundColor: COLORS.cf3f3f3, padding: '32px 0' }}>
      <Inner>
        <Title fontSize={FONTSIZE.fz32}>
          <h1>상품 추가</h1>
        </Title>
        <table style={{ border: '1px solid black', width: '100%' }}>
          <tr>
            <th scope="row">상품명</th>
            <td>
              <input type="text" placeholder="상품명을 입력해 주세요." />
            </td>
          </tr>
          <tr>
            <th scope="row">상품 썸네일 등록</th>
            <td>이미지 등록</td>
          </tr>
          <tr>
            <th scope="row">상품 카테고리</th>
          </tr>
          <tr>
            <th scope="row">그룹별</th>
            <td>
              <CategoryInputStyle>
                <input type="checkbox" id="5070끼리" />
                <label htmlFor="5070">5070끼리</label>
              </CategoryInputStyle>
              <CategoryInputStyle>
                <input type="checkbox" id="남자끼리" />
                <label htmlFor="남자끼리">남자끼리</label>
              </CategoryInputStyle>
              <CategoryInputStyle>
                <input type="checkbox" id="여자끼리" />
                <label htmlFor="여자끼리">여자끼리</label>
              </CategoryInputStyle>
              <CategoryInputStyle>
                <input type="checkbox" id="가족끼리" />
                <label htmlFor="가족끼리">가족끼리</label>
              </CategoryInputStyle>
              <CategoryInputStyle>
                <input type="checkbox" id="누구든지" />
                <label htmlFor="누구든지">누구든지</label>
              </CategoryInputStyle>
            </td>
          </tr>
          <tr>
            <th>테마별</th>
            <td>
              <CategoryInputStyle>
                <input type="checkbox" id="쇼핑" />
                <label htmlFor="쇼핑">쇼핑</label>
              </CategoryInputStyle>
              <CategoryInputStyle>
                <input type="checkbox" id="와인" />
                <label htmlFor="와인">와인</label>
              </CategoryInputStyle>
              <CategoryInputStyle>
                <input type="checkbox" id="문화탐방" />
                <label htmlFor="문화탐방">문화탐방</label>
              </CategoryInputStyle>
              <CategoryInputStyle>
                <input type="checkbox" id="성지순례" />
                <label htmlFor="성지순례">성지순례</label>
              </CategoryInputStyle>
              <CategoryInputStyle>
                <input type="checkbox" id="봉사활동" />
                <label htmlFor="봉사활동">봉사활동</label>
              </CategoryInputStyle>
              <CategoryInputStyle>
                <input type="checkbox" id="트래킹" />
                <label htmlFor="트래킹">트래킹</label>
              </CategoryInputStyle>
              <CategoryInputStyle>
                <input type="checkbox" id="골프" />
                <label htmlFor="골프">골프</label>
              </CategoryInputStyle>
            </td>
          </tr>
        </table>
      </Inner>
    </div>
  )
}

const CategoryInputStyle = styled.div`
  display: flex;
`

export default AddProduct
