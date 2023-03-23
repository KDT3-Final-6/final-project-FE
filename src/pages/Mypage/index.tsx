import React from 'react'
import Inner from '@src/layout/Inner'
import { RiPencilLine } from 'react-icons/ri'
import styled from 'styled-components'
import RoundButton from '@src/components/common/RoundButton'

type Props = {}

const MyPage = (props: Props) => {
  return (
    <div>
      <img
        src="/images/myPage_banner.png"
        alt="banner"
        style={{ height: '190px', width: '100%' }}
      />
      <Inner>
        <ProfileStyle>
          <img src="" alt="" />
          <span>김고투</span>
          <RoundButton buttonType="skyBlue" width="140px" height="42px">
            프로필 편집 <RiPencilLine />
          </RoundButton>
        </ProfileStyle>
      </Inner>
    </div>
  )
}

const ProfileStyle = styled.section`
  display: flex;
  flex-direction: column;
`

export default MyPage
