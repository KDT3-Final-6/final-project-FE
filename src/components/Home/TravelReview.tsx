import Inner from '@src/layout/Inner'
import Section from '@src/layout/Section'
import { COLORS, FONTSIZE } from '@src/styles/root'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Title from '../common/Title'
import { HiChevronRight } from 'react-icons/hi'
const TravelReview = () => {
  const name = '홍길동'
  const content =
    '하와이에서 가장 아름다운 골프 플레이스로 정글에서 게임을 즐기는 느낌의 이색적인 코스 최고!!'
  const AVR_RATE = 5 // 상품 평균 평점. 실제로는 데이터에서 패치할 것 입니다.
  const STAR_IDX_ARR = ['first', 'second', 'third', 'fourth', 'last'] // 다섯개의 별을 따로 컨트롤하기 위해서는 고유 id를 각각 가지고 있어야 합니다. 이 고유 아이디를 쉽게 생성해 주기 위한 리스트 입니다.
  const [ratesResArr, setRatesResArr] = useState([0, 0, 0, 0, 0]) // 별점 리스트 상태입니다.
  const calcStarRates = () => {
    let tempStarRatesArr = [0, 0, 0, 0, 0] // 임시 리스트.
    let starVerScore = (AVR_RATE * 70) / 5 // 별 한 개 당 width가 14이므로 총 70. 100점 만점인 현재와 비율을 맞춰줍니다.
    let idx = 0
    while (starVerScore > 14) {
      // 14를 starVerScore에서 하나씩 빼가면서 별 하나하나에 채워질 width를 지정해줍니다. 다 채워지지 않을 인덱스의 별은 아래 tempStarRatesArr[idx] = starVerScore; 에서 채워줍니다.
      tempStarRatesArr[idx] = 14
      idx += 1 // 인덱스 0부터 첫번째 별 입니다.
      starVerScore -= 14
    }
    tempStarRatesArr[idx] = starVerScore
    return tempStarRatesArr // 평균이 80이라면 [14, 14, 14, 14, 0] 이 되겠죠?
  }
  useEffect(() => {
    setRatesResArr(calcStarRates) // 별점 리스트는 첫 렌더링 때 한번만 상태를 설정해줍니다.
  }, [])
  return (
    <Section>
      <Inner>
<<<<<<< HEAD
        <Title fontSize={FONTSIZE.fz32}>
          <h2>실제 고객 여행 후기</h2>
        </Title>
=======
        <Title
          titleType="h2"
          fontSize={FONTSIZE.fz32}
          marginBottom="50px"
          title="실제 고객 여행 후기"
        />
        <ContainerStyle>
          <ReviewCardStyle>
            <HeaderStyle>
              <span>{name}</span>
              <GradeStyle>
                <StarRateWrap>
                  {STAR_IDX_ARR.map((item, idx) => {
                    return (
                      <span className="star_icon" key={`${item}_${idx}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 14 13"
                          fill="#cacaca"
                        >
                          {/* id는 별 하나하나 마다 다른 값을 가지고 있어야 합니다 */}
                          <clipPath id={`${item}StarClip`}>
                            {/* 새로 생성한 리스트에서 별 길이를 넣어줍니다. */}
                            <rect width={`${ratesResArr[idx]}`} height="39" />
                          </clipPath>
                          <path
                            id={`${item}Star`}
                            d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
                            transform="translate(-2 -2)"
                          />
                          <use
                            clipPath={`url(#${item}StarClip)`}
                            href={`#${item}Star`}
                            fill={`${COLORS.cffcc43}`}
                          />
                        </svg>
                      </span>
                    )
                  })}
                </StarRateWrap>
                <span>{AVR_RATE.toFixed(1)}</span>
              </GradeStyle>
            </HeaderStyle>
            <ContentStyle>
              <p>
                하와이에서 가장 아름다운 골프 플레이스로 정글에서 게임을 즐기는 느낌의 이색적인 코스
                최고!!
              </p>
              <BtnStyle>
                <span>자세히 보기</span>
                <HiChevronRight />
              </BtnStyle>
            </ContentStyle>
          </ReviewCardStyle>
          <ReviewCardStyle>
            <HeaderStyle>
              <span>{name}</span>
              <GradeStyle>
                <StarRateWrap>
                  {STAR_IDX_ARR.map((item, idx) => {
                    return (
                      <span className="star_icon" key={`${item}_${idx}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 14 13"
                          fill="#cacaca"
                        >
                          {/* id는 별 하나하나 마다 다른 값을 가지고 있어야 합니다 */}
                          <clipPath id={`${item}StarClip`}>
                            {/* 새로 생성한 리스트에서 별 길이를 넣어줍니다. */}
                            <rect width={`${ratesResArr[idx]}`} height="39" />
                          </clipPath>
                          <path
                            id={`${item}Star`}
                            d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
                            transform="translate(-2 -2)"
                          />
                          <use
                            clipPath={`url(#${item}StarClip)`}
                            href={`#${item}Star`}
                            fill={`${COLORS.cffcc43}`}
                          />
                        </svg>
                      </span>
                    )
                  })}
                </StarRateWrap>
                <span>{AVR_RATE.toFixed(1)}</span>
              </GradeStyle>
            </HeaderStyle>
            <ContentStyle>
              <p>
                하와이에서 가장 아름다운 골프 플레이스로 정글에서 게임을 즐기는 느낌의 이색적인 코스
                최고!!
              </p>
              <BtnStyle>
                <span>자세히 보기</span>
                <HiChevronRight />
              </BtnStyle>
            </ContentStyle>
          </ReviewCardStyle>
          <ReviewCardStyle>
            <HeaderStyle>
              <span>{name}</span>
              <GradeStyle>
                <StarRateWrap>
                  {STAR_IDX_ARR.map((item, idx) => {
                    return (
                      <span className="star_icon" key={`${item}_${idx}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 14 13"
                          fill="#cacaca"
                        >
                          {/* id는 별 하나하나 마다 다른 값을 가지고 있어야 합니다 */}
                          <clipPath id={`${item}StarClip`}>
                            {/* 새로 생성한 리스트에서 별 길이를 넣어줍니다. */}
                            <rect width={`${ratesResArr[idx]}`} height="39" />
                          </clipPath>
                          <path
                            id={`${item}Star`}
                            d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
                            transform="translate(-2 -2)"
                          />
                          <use
                            clipPath={`url(#${item}StarClip)`}
                            href={`#${item}Star`}
                            fill={`${COLORS.cffcc43}`}
                          />
                        </svg>
                      </span>
                    )
                  })}
                </StarRateWrap>
                <span>{AVR_RATE.toFixed(1)}</span>
              </GradeStyle>
            </HeaderStyle>
            <ContentStyle>
              <p>
                하와이에서 가장 아름다운 골프 플레이스로 정글에서 게임을 즐기는 느낌의 이색적인 코스
                최고!!
              </p>
              <BtnStyle>
                <span>자세히 보기</span>
                <HiChevronRight />
              </BtnStyle>
            </ContentStyle>
          </ReviewCardStyle>
        </ContainerStyle>
>>>>>>> 77b4690 (Feat: 메인 페이지 후기 영역 마크업)
      </Inner>
    </Section>
  )
}

export default TravelReview

const ReviewCardStyle = styled.div`
  width: 380px;
  height: 298px;
  border: 1px solid ${COLORS.cd9d9d9};
  border-radius: 12px;
  font-size: ${FONTSIZE.fz20};
  overflow: hidden;
`

const ContainerStyle = styled.div`
  display: flex;
  gap: 20px;
  ${ReviewCardStyle} {
    &:first-child {
      background-color: ${COLORS.c3BA1FF};
      color: ${COLORS.white};
    }
  }
`

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 31px;
  border-bottom: 1px solid ${COLORS.cd9d9d9};
`

const GradeStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const StarRateWrap = styled.div`
  span {
    display: inline-block;
    margin-left: 2px;
  }
`

const ContentStyle = styled.div`
  position: relative;
  padding: 26px 30px 88px 35px;
  p {
    width: 315px;
    height: 113px;
    line-height: 36px;
  }
`
const BtnStyle = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  right: 30px;
  bottom: 28px;
  height: 30px;
  line-height: 30px;
  gap: 2px;
  svg {
    font-size: 24px;
    height: 24px;
  }
`
