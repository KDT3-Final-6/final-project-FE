import React, { useState, useEffect, useRef } from 'react'
import CardTypeItem from '@src/components/common/CardTypeItem'
import styled from 'styled-components'
import { COLORS } from '@src/styles/root'
import { IProductContent } from '@src/interfaces/product'
import GroupTabs from './GroupTabs'
import { getCategoryProducts } from '@src/api/product'
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
import { useGetCategoryProductsQuery } from '@src/reduxStore/api/productsApiSlice'

interface Props {
  title: string
  labelName: string
}

const ProductList = ({ title, labelName }: Props) => {
  const [group, setGroup] = useState('age5070')

  const dispatch = useDispatch()
  const [deleteWishlist] = useDeleteWishlistMutation()
  const [postWishlist] = usePostWishlistMutation()

  const [cookies] = useCookies()
  let accessToken = cookies.accessToken
  const { data: userInfo } = useGetUserInfoQuery(undefined, {
    skip: !accessToken,
    refetchOnMountOrArgChange: true,
  })
  const heartCheck = async (heart: boolean, productId: number) => {
    if (userInfo?.memberName && heart) {
      await deleteWishlist(productId)
    } else if (!heart && userInfo?.memberName) {
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
  const groupName = (group: string) => {
    if (group.includes('age5070')) return '5070끼리' as string
    if (group.includes('males')) return '남자끼리' as string
    if (group.includes('females')) return '여자끼리' as string
    if (group.includes('family')) return '가족끼리' as string
    if (group.includes('anyone')) return '누구든지' as string
    return '5070끼리'
  }
  const { data } = useGetCategoryProductsQuery({ keyword: groupName(group) })
  const products = data ? data.content : []

  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const settings = useSwiperSetting({ prevRef, nextRef, slidesPerView: 4, spaceBetween: 10 })

  return (
    <>
      <SectionStyle>
        <GroupTabs setGroup={setGroup} title={title} labelName={labelName} />
      </SectionStyle>
      <div style={{ position: 'relative' }}>
        <SlideButtons direction="left" ref={prevRef} />
        <Swiper {...settings}>
          {products.length > 0 &&
            products.map((product) => (
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
        <SlideButtons ref={nextRef} direction="right" />
      </div>
    </>
  )
}

const SectionStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 60px 0 40px 0;
`
export default ProductList
