import React, { useState, useEffect } from 'react'
import Inner from '@src/layout/Inner'
import ProductList from '@src/components/ProductPage/ProductList'
import CategoryList from '@src/components/ProductPage/CategoryList'
import Banner from '@src/components/Home/Banner'
import ProductSlider from '@src/components/ProductPage/ProductSlider'
import ThemeTravel from '@src/components/Home/ThemeTravel'
import { getCategoryProducts } from '@src/api/product'
import { IProductContent } from '@src/interfaces/product'

const Recommend = () => {
  const [recommendList, setRecommendList] = useState<IProductContent[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategoryProducts('여자끼리')
      setRecommendList(data.content)
    }
    fetchData()
  }, [])
  return (
    <div>
      <div style={{ height: '569px' }}>
        <ProductSlider />
      </div>
      <Inner>
        <ProductList title="그룹별여행" />
        <CategoryList title="추천 여행" products={recommendList} />
      </Inner>
      <ThemeTravel />
      <Inner>
        <Banner image="event_banner" marginTop="50px" marginBottom="26px" type={2} />
        <Banner image="event_banner2" marginBottom="100px" type={1} />
      </Inner>
    </div>
  )
}

export default Recommend
