import { IProduct } from '@src/env'
import CardTypeItem from '@src/components/common/CardTypeItem'
import { COLORS } from '@src/styles/root'
import styled from 'styled-components'

type Props = {}

const RelatedProduct = (props: Props) => {
  const products: IProduct[] = [
    {
      id: '1',
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 2135000,
      heart: true,
    },
    {
      id: '2',
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 2135000,
      heart: true,
    },
    {
      id: '3',
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 2135000,
      heart: false,
    },
    {
      id: '4',
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20220419/31ca7e26eb12a.png',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 2135000,
      heart: false,
    },
  ]
  return (
    <section>
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
    </section>
  )
}

const ProductListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 13px;
`

export default RelatedProduct
