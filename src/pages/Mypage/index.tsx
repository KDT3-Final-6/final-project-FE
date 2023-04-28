import React, { useState, useEffect } from 'react'
import Inner from '@src/layout/Inner'
import { RiPencilLine } from 'react-icons/ri'
import styled from 'styled-components'
import Image from '@src/components/common/Image'
import MenuTab from '@src/components/MyPage/MenuTab'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import { Outlet, useNavigate } from 'react-router-dom'
import Button from '@components/common/Button'
import Title, { HighlightSpanStyle } from '@src/components/common/Title'
import { useGetUserInfoQuery } from '@src/reduxStore/api/userApiSlice'

const MyPage = () => {
  const [activeMenu, setActiveMenu] = useState(0)
  const navigate = useNavigate()
  const { data } = useGetUserInfoQuery()
  const userInfoData = data

  return (
    <>
      <Image bgImage="/images/myPage_banner.png" alt="banner" width="100%" height="190px" />
      <ProfileStyle>
        <Image
          bgImage={userInfoData?.memberImage}
          alt="프로필"
          width="130px"
          height="130px"
          imgBorderRadius="200px"
          border={`5px solid ${COLORS.white}`}
        />
        <span style={{ fontSize: FONTSIZE.fz24, fontWeight: FONTWEGHT.fw700 }}>
          {userInfoData?.memberName}
        </span>
        <Title
          titleType="h3"
          title={userInfoData?.memberEmail}
          fontSize={FONTSIZE.fz15}
          fontWeight={FONTWEGHT.fw400}
          margin="-10px 0 0"
        />
        <Title textAlign="center" fontSize={FONTSIZE.fz18} fontWeight={FONTWEGHT.fw400}>
          <h2>
            <HighlightSpanStyle
              color={COLORS.c3ba1ff}
              fontSize={FONTSIZE.fz20}
              fontWeight={FONTWEGHT.fw600}
              spanMargin="0 0 20px"
            >
              {userInfoData?.roles.includes('ROLE_ADMIN') ? '관리자' : '일반회원'}
            </HighlightSpanStyle>
          </h2>
        </Title>
        <Button
          buttonType="cartSkyBlue"
          width="140px"
          height="42px"
          borderRadius="50px"
          onClick={() => navigate('/mypage/checkpassword')}
        >
          <div
            style={{
              display: 'flex',
              gap: '5px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span>프로필 편집</span> <RiPencilLine style={{ margin: 0 }} />
          </div>
        </Button>
      </ProfileStyle>
      <InnerWrap>
        <Inner>
          <MenuTab setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
          <Outlet />
        </Inner>
      </InnerWrap>
    </>
  )
}

const ProfileStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
  top: -65px;
`

const InnerWrap = styled.div`
  border-top: 1px solid ${COLORS.cd9d8d8};
`

export default MyPage
