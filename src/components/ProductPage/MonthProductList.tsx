import React from 'react'
import Title from '../common/Title'
import styled from 'styled-components'
import { COLORS } from '@src/styles/root'
import CardTypeItem from '../common/CardTypeItem'
import { IProduct, IProductContent } from '@src/interfaces/product'
import {
  useDeleteWishlistMutation,
  usePostWishlistMutation,
} from '@src/reduxStore/api/wishlistApislice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@src/reduxStore/store'
import { setModal } from '@src/reduxStore/modalSlice'

interface Props {
  products: IProductContent[]
}

const MonthProductList = ({ products }: Props) => {
  const userInfo = useSelector((state: RootState) => state.userInfo)
  const dispatch = useDispatch()
  const [deleteWishlist] = useDeleteWishlistMutation()
  const [postWishlist] = usePostWishlistMutation()
  const heartCheck = async (heart: boolean, productId: number) => {
    if (userInfo.memberName && heart) {
      await deleteWishlist(productId)
    } else if (!heart && userInfo.memberName) {
      await postWishlist(productId)
    } else {
      dispatch(
        setModal({
          isOpen: true,
          text: '로그인이 필요한 서비스입니다.',
          onClickOK: () => dispatch(setModal({ isOpen: false })),
        })
      )
    }
  }
  return (
    <div>
      <Title margin="80px 0 50px 0">
        <h2>3월 인기 테마여행 패키지</h2>
      </Title>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
        <ProductListStyle>
          {products.map((product) => (
            <CardTypeItem
              key={product.productId}
              item={product}
              cardType="cardType"
              imgHeight="100%"
              height="460px"
              priceBottom="30px"
              priceColor={COLORS.c1b1b1b}
              isHeart={product.isWished}
              heartClick={() => heartCheck(product.isWished, product.productId!)}
            />
          ))}
        </ProductListStyle>
      </div>
    </div>
  )
}

const ProductListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 13px;
`

export default MonthProductList
