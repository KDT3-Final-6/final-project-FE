import Button from '@src/components/common/Button'
import Image from '@src/components/common/Image'
import Title from '@src/components/common/Title'
import KaKaoMap from '@src/components/Counsult/KaKaoMap'
import MapTag from '@src/components/Counsult/MapTag'
import Inner from '@src/layout/Inner'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import useCopyClipBoard from '@src/utils/copyURL'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const index = () => {
  const onCopy = useCopyClipBoard()

  return (
    <ContainerStyle>
      <Title margin="102px 0 80px 0" fontSize={FONTSIZE.fz32}>
        상담서비스
      </Title>
      <ServiceBoxStyle>
        <LeftBoxStyle>
          <article>
            <Image width="132px" height="132px" src="images/kakaotalk_logo.png" />
            <p>카톡상담</p>
          </article>
          <div>
            <p>
              <span>@고투게더</span>
              <span>채널을 추가 후 실시간 상담</span>
            </p>
            <p>상담가능시간</p>
            <p>평일 09:00~18:00</p>
            <Button
              onClick={() => onCopy(`http://pf.kakao.com/_hCxcqb`)}
              width="307px"
              height="53px"
              buttonType="black"
              borderRadius="10px"
            >
              카카오톡 문의하기
            </Button>
          </div>
        </LeftBoxStyle>
        <RightBoxStyle>
          <article>
            <Image src="images/Group-call.png" />
            <p>전화상담</p>
          </article>
          <div>
            <p>
              <span>고객센터</span>
              <span>02-6105-7711</span>
            </p>
            <p>상담가능시간</p>
            <p>평일 09:00 ~ 18:00</p>
            <Button
              onClick={() => onCopy(`02-6105-7711`)}
              width="307px"
              height="53px"
              buttonType="black"
              borderRadius="10px"
            >
              카카오톡 문의하기
            </Button>
          </div>
        </RightBoxStyle>
      </ServiceBoxStyle>
      <CounsultSectionStyle>
        <div></div>
        <div></div>
        <article>
          <h3>방문상담</h3>
          <p>고투게더</p>
          <span>(04521) 서울특별시 중구 청계천로40, 한국관광공사 서울센터 818호</span>
          <MapTagBoxStyle>
            <MapTag bgColor="#0052A4" lineNumber={1} name="종각역" meter={220} />
            <MapTag bgColor="#996CAC" lineNumber={5} name="광화문역" meter={220} />
            <MapTag bgColor="#00A84D" lineNumber={2} name="을지로입구역" meter={220} />
            <MapTag bgColor="#EF7C1C" lineNumber={3} name="안국역" meter={220} />
          </MapTagBoxStyle>
          <KaKaoMap />
        </article>
      </CounsultSectionStyle>
    </ContainerStyle>
  )
}

export default index

const RightBoxStyle = styled.div`
  div {
    p:first-child {
      display: flex;
      align-items: center;
      gap: 15px;
      font-size: 20px;
      line-height: 150%;
      span:nth-child(2) {
        font-weight: 700;
        font-size: 26px;
      }
    }
  }
`

const LeftBoxStyle = styled.div`
  div {
    p:first-child {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 20px;
      span {
        line-height: 150%;
        :first-child {
          font-weight: 600;
          text-decoration: underline;
        }
      }
    }
  }
`

const ServiceBoxStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 40px;
  ${RightBoxStyle},${LeftBoxStyle} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 36px;
    background-color: ${COLORS.white};
    width: 570px;
    height: 275px;
    border: 1px solid ${COLORS.cddd};
    article {
      text-align: center;
      p {
        margin-top: 7px;
        font-weight: ${FONTWEGHT.fw600};
        font-size: ${FONTSIZE.fz24};
        line-height: 150%;
      }
    }
    div {
      p {
        :first-child {
        }
        :nth-child(2) {
          margin-top: 15px;
          font-weight: 500;
          font-size: 16px;
          line-height: 150%;
        }
        :nth-child(3) {
          font-weight: 700;
          font-size: 26px;
          line-height: 150%;
          margin-bottom: 10px;
        }
      }
    }
  }
`

const ContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${COLORS.cF5F5F5};
  padding-bottom: 50px;
`

const CounsultSectionStyle = styled.div`
  display: flex;
  article {
    padding: 50px 60px;
    width: 1180px;
    background-color: ${COLORS.white};
    border: 1px solid ${COLORS.cddd};
    h3 {
      font-size: ${FONTSIZE.fz24};
      font-weight: ${FONTWEGHT.fw600};
      margin-bottom: 21px;
      line-height: 150%;
    }
    p {
      font-size: ${FONTSIZE.fz26};
      font-weight: ${FONTWEGHT.fw600};
      line-height: 150%;
      margin-bottom: 8px;
    }
    span {
      font-size: ${FONTSIZE.fz20};
      font-weight: ${FONTWEGHT.fw500};
    }
  }
`

const MapTagBoxStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 400px);
  gap: 8px;
  margin-top: 52px;
  margin-bottom: 12px;
`
