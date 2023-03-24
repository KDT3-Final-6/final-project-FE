import Pagination from '@src/components/common/Pagination'
import { IProduct } from '@src/interfaces/product'
import React from 'react'
import styled from 'styled-components'
import CardTypeItem from '@src/components/common/CardTypeItem'

const WishList = () => {
  const products: IProduct[] = [
    {
      id: '1',
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20220721/45b42bf39f392.jpg',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 7490000,
      heart: false,
      categoryNames: ['여자끼리', '익사이팅'],
    },
    {
      id: '2',
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20221013/779ba90e465be.jpg',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 6431321605,
      heart: true,
      categoryNames: ['여자끼리', '익사이팅'],
    },
    {
      id: '3',
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20221012/edd6229ea1a1c.png',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 45678604534,
      heart: false,
      categoryNames: ['여자끼리', '익사이팅'],
    },
    {
      id: '4',
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20221001/fa15055f63b27.jpg',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 45645645645,
      heart: false,
      categoryNames: ['여자끼리', '익사이팅'],
    },
    {
      id: '5',
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20220330/d5af3a4b3b410.png',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 45645645,
      heart: false,
      categoryNames: ['여자끼리', '익사이팅'],
    },
    {
      id: '6',
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20220928/40cf36793899c.jpg',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 45645645,
      heart: false,
      categoryNames: ['여자끼리', '익사이팅'],
    },
    {
      id: '7',
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20220921/a181370d08550.jpg',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 456456,
      heart: false,
      categoryNames: ['여자끼리', '익사이팅'],
    },
    {
      id: '8',
      title: '괌 4박 5일',
      image: 'https://cdn.imweb.me/thumbnail/20230209/bcba2c0bc25da.jpg',
      hashs: ['트롤링낚시', '롯데', '패밀리스윗'],
      price: 456456456,
      heart: false,
      categoryNames: ['여자끼리', '익사이팅'],
    },
  ]

  return (
    <>
      <ProductListStyle>
        {products.map((product) => (
          <CardTypeItem
            key={product.id}
            item={product}
            cardType="ImageCardType"
            bgImage={product.image}
          />
        ))}
      </ProductListStyle>
      <Pagination />
    </>
  )
}

export default WishList

const ProductListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin: 50px 0;
`
