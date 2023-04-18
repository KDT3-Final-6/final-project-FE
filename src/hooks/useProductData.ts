import { useEffect, useState } from 'react'
import { useGetCategoryProductsQuery } from '@src/reduxStore/api/productsApiSlice'
import { IProductContent } from '@src/interfaces/product'
import getSelected from '@src/utils/getSelected'

const useProductData = (checkTab: string[]) => {
  const [products, setProducts] = useState<Array<IProductContent[]>>([])

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

  return products
}

export default useProductData
