import React, { useState, useEffect } from 'react'
import Inner from '@src/layout/Inner'
import ProductList from '@src/components/ProductPage/ProductList'
import CategoryList from '@src/components/ProductPage/CategoryList'
import Banner from '@src/components/Home/Banner'
import ProductSlider from '@src/components/ProductPage/ProductSlider'
import ThemeTravel from '@src/components/Home/ThemeTravel'
import { useGetCategoryProductsQuery } from '@src/reduxStore/api/productsApiSlice'

const Recommend = () => {
  const { data } = useGetCategoryProductsQuery({ keyword: '누구든지' })
  const recommendList = data ? data.content : []
  return (
    <div>
      <div style={{ height: '569px' }}>
        <ProductSlider />
      </div>
      <Inner>
        <ProductList title="그룹별여행" labelName="group" />
        <CategoryList title="추천 여행" products={recommendList} />
      </Inner>
      <ThemeTravel />
      <Inner>
        <Banner image="/images/banner/event_banner-4.png" marginTop="-210px" marginBottom="26px" />
        <Banner image="/images/banner/event_banner-5.png" marginBottom="100px" />
      </Inner>
    </div>
  )
}

export default Recommend
