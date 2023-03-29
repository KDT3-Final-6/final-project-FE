import { getProducts } from '@src/api/product'
import CardTypeItem from '@src/components/common/CardTypeItem'
import Input from '@src/components/common/Input'
import Pagination from '@src/components/common/Pagination'
import Select from '@src/components/common/Select'
import { IProduct } from '@src/env'
import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Search = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    ;(async () => {
      setProducts(await getProducts())
    })()
  }, [])

  const hasProducts = products && products.length > 0
  // const countProduct = 8
  const selectOptions = ['인기순', '가격높은순', '가격낮은순']

  return (
    <section>
      <Inner>
        <InputContainerStyle>
          <Input
            inputType="searchInput"
            type="text"
            width="500px"
            height="56px"
            placeholder="여행 그룹이나 상품을 검색해보세요."
          />
        </InputContainerStyle>
        <TitleStyle>통합 검색</TitleStyle>
        {hasProducts ? (
          <ResultContainerStyle>
            <FilterboxStyle>
              <p>{products.length}건의 검색 결과</p>
              <Select options={selectOptions} initial="인기순" />
            </FilterboxStyle>
            <ProductListStyle>
              {products.map((product) => (
                <CardTypeItem
                  key={product.id}
                  item={product}
                  cardType="cardType"
                  imgHeight="100%"
                  height="460px"
                  priceBottom="30px"
                  priceColor={COLORS.c1b1b1b}
                />
              ))}
            </ProductListStyle>
            <Pagination />
          </ResultContainerStyle>
        ) : (
          <ResultMsgContainerStyle>
            <p>검색 결과가 없습니다.</p>
          </ResultMsgContainerStyle>
        )}
      </Inner>
    </section>
  )
}

export default Search

const InputContainerStyle = styled.div`
  width: 100%;
  height: 293px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TitleStyle = styled.div`
  font-weight: ${FONTWEGHT.fw500};
  font-size: ${FONTSIZE.fz26};
  line-height: 150%;
  padding-bottom: 12px;
  border-bottom: 1px solid ${COLORS.cE0E0E0};
`

const ResultContainerStyle = styled.div`
  padding-top: 33px;
  padding-bottom: 178px;
`

const FilterboxStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 54px;
  font-size: ${FONTSIZE.fz20};
  font-weight: ${FONTWEGHT.fw500};
  line-height: 1.5;
`

const ProductListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 11px;
  padding-bottom: 100px;
`

const ResultMsgContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  padding-top: 130px;
  padding-bottom: 178px;
`

// const SelectStyle = styled.ul``
