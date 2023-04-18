import Inner from '@src/layout/Inner'
import Title from '@src/components/common/Title'
import React, { useState, useEffect } from 'react'
import Image from '@src/components/common/Image'
import styled from 'styled-components'
import { FONTSIZE, FONTWEGHT, COLORS } from '@src/styles/root'
import DistrictCheckTab from '@src/components/ProductPage/District/DistrictCheckTab'
import CategoryList from '@src/components/ProductPage/CategoryList'
import districtTab from '@src/constants/districtTab'
import { useGetCategoryProductsQuery } from '@src/reduxStore/api/productsApiSlice'
import { IProductContent, IProductContentUnion } from '@src/interfaces/product'
import useProductData from '@src/hooks/useProductData'
import getSelected from '@src/utils/getSelected'

type Props = {}

const District = (props: Props) => {
  const [checkTab, setCheckTab] = useState<string[]>([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let items: IProductContent[][] = []
      for (let tab of getSelected(checkTab)) {
        tab = tab.replace('&', '%26')
        const { data } = await useGetCategoryProductsQuery({ keyword: tab })
        const item = data ? data.content : []
        items = [...items, item]
      }
      setProducts(items)
    }
    fetchData()
  }, [checkTab])
  console.log(products)

  return (
    <div style={{ margin: '32px 0' }}>
      <Inner>
        <Title margin="32px 0">
          <h1>지역별 여행</h1>
        </Title>
      </Inner>
      <Image bgImage="/images/district_banner.png" width="100%" height="569px">
        <BannerStyle>
          <span>새로운 여행지에서</span>
          <span>소중한 추억을 쌓으세요</span>
          <span>원하시는 여행지를 찾아 보세요</span>
        </BannerStyle>
      </Image>
      <Inner>
        <Title margin="69px 0 50px 0">
          <h2>지역 선택하기</h2>
        </Title>
        <DistrictCheckTab setCheckTab={setCheckTab} />
        {checkTab.length > 0 ? (
          products.map((product, index) => (
            <CategoryList
              title={getSelected(checkTab)[index]}
              products={product}
              key={getSelected(checkTab)[index]}
            />
          ))
        ) : (
          <NullDistrictStyle>원하는 지역을 선택해 주세요.</NullDistrictStyle>
        )}
      </Inner>
    </div>
  )
}

const BannerStyle = styled.div`
  position: relative;
  left: 203px;
  top: 116px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: ${COLORS.white};
  span {
    font-size: 40px;
    font-weight: ${FONTWEGHT.fw700};
  }
  span:last-child {
    font-size: ${FONTSIZE.fz16};
    font-weight: ${FONTWEGHT.fw400};
  }
`

const NullDistrictStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
  font-size: ${FONTSIZE.fz20};
  color: ${COLORS.c090909};
  font-weight: ${FONTWEGHT.fw500};
`

export default District
