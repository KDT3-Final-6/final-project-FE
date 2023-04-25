import React, { useState, useEffect, useRef } from 'react'
import Title from '../common/Title'
import styled from 'styled-components'
import CardTypeItem from '../common/CardTypeItem'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import { IProductContent } from '@src/interfaces/product'
import { Swiper, SwiperSlide } from 'swiper/react'
import useSwiperSetting from '@src/hooks/useSwiperSetting'
import SlideButtons from '../common/SlideButtons'
import {
  useDeleteWishlistMutation,
  usePostWishlistMutation,
} from '@src/reduxStore/api/wishlistApislice'
import { useDispatch } from 'react-redux'
import { setModal } from '@src/reduxStore/modalSlice'
import { useGetUserInfoQuery } from '@src/reduxStore/api/userApiSlice'
import { useCookies } from 'react-cookie'
import { initialState } from '@src/reduxStore/features/userInfoSlice'
import { IUserInfo } from '@src/interfaces/user'

interface Props {
  title: string
  products: IProductContent[]
}

const CategoryList = ({ title, products }: Props) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const settings = useSwiperSetting({ prevRef, nextRef, slidesPerView: 4, spaceBetween: 10 })
  const [cookies] = useCookies()
  let accessToken = cookies.accessToken
  const { data } = useGetUserInfoQuery(undefined, {
    skip: !accessToken,
    refetchOnMountOrArgChange: true,
  })
  const userInfo: IUserInfo = data ? data : initialState
  const [deleteWishlist] = useDeleteWishlistMutation()
  const [postWishlist] = usePostWishlistMutation()
  const dispatch = useDispatch()

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
    <>
      <Title margin="80px 0 50px 0" fontSize={FONTSIZE.fz32} title={title} titleType="h2" />
      {products && products.length > 0 ? (
        <div style={{ position: 'relative' }}>
          <SlideButtons direction="left" ref={prevRef} />
          <Swiper {...settings}>
            {products.map((product) => (
              <SwiperSlide key={product.productId}>
                <CardTypeItem
                  item={product}
                  cardType="cardType"
                  imgHeight="100%"
                  height="460px"
                  priceBottom="30px"
                  priceColor={COLORS.c1b1b1b}
                  isHeart={product.isWished}
                  heartClick={() => heartCheck(product.isWished, product.productId!)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <SlideButtons ref={nextRef} direction="right" />{' '}
        </div>
      ) : (
        <NullProductStyle>{title} 여행은 준비 중입니다.</NullProductStyle>
      )}
    </>
  )
}

const NullProductStyle = styled.div`
  font-size: ${FONTSIZE.fz24};
  margin: 50px 0;
`

export default CategoryList
