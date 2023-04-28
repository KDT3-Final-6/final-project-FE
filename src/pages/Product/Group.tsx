import Title from '@src/components/common/Title'
import Inner from '@src/layout/Inner'
import ProductList from '@src/components/ProductPage/ProductList'
import Banner from '@components/Home/Banner'
import CategoryList from '@src/components/ProductPage/CategoryList'
import ProductSlider from '@src/components/ProductPage/ProductSlider'
import { IProductContent } from '@src/interfaces/product'
import { useGetCategoryProductsQuery } from '@src/reduxStore/api/wishlistApislice'

const Group = () => {
  const groupNames = ['여자끼리', '남자끼리', '5070끼리', '가족끼리', '누구든지']
  let woman: IProductContent[] = []
  let man: IProductContent[] = []
  let old: IProductContent[] = []
  let family: IProductContent[] = []
  let anyone: IProductContent[] = []
  const fetchProducts = () => {
    for (const groupName of groupNames) {
      const { data } = useGetCategoryProductsQuery({ keyword: groupName })
      if (groupName === '여자끼리') woman = data ? data.content : []
      if (groupName === '남자끼리') man = data ? data.content : []
      if (groupName === '5070끼리') old = data ? data.content : []
      if (groupName === '가족끼리') family = data ? data.content : []
      if (groupName === '누구든지') anyone = data ? data.content : []
    }
  }
  fetchProducts()

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
        <ProductList title="TOP 10 인기 그룹별 여행" labelName="top" />
        <ProductList title="방금 뜬 그룹별 여행" labelName="recent" />
        <CategoryList title="여자끼리" products={woman} />
        <CategoryList title="남자끼리" products={man} />
        <Banner image="/images/banner/event_banner-1.png" marginTop="100px" marginBottom="100px" />
        <CategoryList title="5070끼리" products={old} />
        <CategoryList title="가족끼리" products={family} />
        <CategoryList title="누구든지" products={anyone} />
      </Inner>
    </div>
  )
}

export default Group
