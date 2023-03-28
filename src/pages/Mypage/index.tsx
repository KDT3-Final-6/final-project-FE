import React, { useState } from 'react'
import Inner from '@src/layout/Inner'
import { RiPencilLine } from 'react-icons/ri'
import styled from 'styled-components'
import Image from '@src/components/common/Image'
import MenuTab from '@src/components/MyPage/MenuTab'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import { Outlet } from 'react-router-dom'
import Button from '@components/common/Button'

const MyPage = () => {
  const [activeMenu, setActiveMenu] = useState(0)
  return (
    <>
      <Image bgImage="/images/myPage_banner.png" alt="banner" width="100%" height="190px" />
      <ProfileStyle>
        <Image
          bgImage="/images/profile.png"
          alt="프로필"
          width="130px"
          height="130px"
          imgBorderRadius="200px"
          border={`5px solid ${COLORS.white}`}
        />
        <span style={{ fontSize: FONTSIZE.fz24, fontWeight: FONTWEGHT.fw700 }}>김고투</span>
        <Button buttonType="cartSkyBlue" width="140px" height="42px" borderRadius="50px">
          <div
            style={{ display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'center' }}
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
