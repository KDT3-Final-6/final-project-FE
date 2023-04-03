import Title from '@src/components/common/Title'
import Inner from '@src/layout/Inner'
import React, { useState, useEffect } from 'react'
import ProductList from '@src/components/ProductPage/ProductList'
import Banner from '@components/Home/Banner'
import CategoryList from '@src/components/ProductPage/CategoryList'
import ProductSlider from '@src/components/ProductPage/District/ProductSlider'
import { IProductContent } from '@src/interfaces/product'
import { getCategoryProducts } from '@src/api/product'

type Props = {}

const Group = (props: Props) => {
  const [woman, setWoman] = useState<IProductContent[]>([])
  const [man, setMan] = useState<IProductContent[]>([])
  const [old, setOld] = useState<IProductContent[]>([])
  const [family, setFamily] = useState<IProductContent[]>([])
  const [anyone, setAnyone] = useState<IProductContent[]>([])
  useEffect(() => {
    const fetchData = async (keyword: string) => {
      const data = await getCategoryProducts(keyword)
      if (keyword === '여자끼리') setWoman(data.content)
      if (keyword === '남자끼리') setMan(data.content)
      if (keyword === '5070끼리') setOld(data.content)
      if (keyword === '가족끼리') setFamily(data.content)
      if (keyword === '누구든지') setAnyone(data.content)
    }
    fetchData('여자끼리')
    fetchData('남자끼리')
    fetchData('5070끼리')
    fetchData('가족끼리')
    fetchData('누구든지')
  }, [])
  return (
    <div style={{ margin: '32px 0' }}>
      <Inner>
        <Title margin="32px 0">
          <h1>그룹별 여행</h1>
        </Title>
      </Inner>
      <div style={{ width: '100%', height: '569px' }}>
        <ProductSlider />
      </div>
      <Inner>
        <ProductList title="TOP 10 인기 그룹별 여행" />
        <ProductList title="방금 뜬 그룹별 여행" />
        <CategoryList title="여자끼리" products={woman} />
        <CategoryList title="남자끼리" products={man} />
        <Banner image="event_banner2" marginTop="100px" marginBottom="100px" type={1} />
        <CategoryList title="5070끼리" products={old} />
        <CategoryList title="가족끼리" products={family} />
        <CategoryList title="누구든지" products={anyone} />
      </Inner>
    </div>
  )
}

export default Group
