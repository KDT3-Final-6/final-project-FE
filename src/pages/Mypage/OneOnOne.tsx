import { getQnAList } from '@src/api/post'
import Button from '@src/components/common/Button'
import OneOnOneCard from '@src/components/MyPage/OneOnOneCard'
import QuestionCard from '@src/components/MyPage/QuestionCard'
import { useGetQnAListQuery } from '@src/reduxStore/api/qnaApiSlice'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Paginate from '@src/components/common/Paginate'

const OneOnOne = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [page, setPage] = useState<number>(1)

  const { data: qnaList, isLoading, isFetching } = useGetQnAListQuery(page)
  if (isLoading) <>Loading</>

  const handleClick = () => setIsOpen((prev) => !prev)

  const changePageHandler = (event: { selected: number }) => {
    setPage(event.selected + 1)
  }

  console.log('qnaList', qnaList)

  // 정렬....
  // const sortedQnAList = qnaList && {
  //   ...qnaList,
  //   content: [...qnaList.content].sort((a, b) => b.postId - a.postId),
  // }

  return (
    <ContainerStyle>
      <BtnBoxStyle>
        <Button width="140px" buttonType="cartSkyBlue" onClick={handleClick}>
          문의 작성
        </Button>
      </BtnBoxStyle>
      <CardSectionStyle>
        {isOpen && <QuestionCard isOpen={isOpen} setIsOpen={setIsOpen} />}
        {qnaList?.content.map((item) => (
          <OneOnOneCard key={item.postId} postInfo={item} />
        ))}
      </CardSectionStyle>
      <Paginate totalElements={qnaList?.totalPages || 0} changePageHandler={changePageHandler} />
    </ContainerStyle>
  )
}

export default OneOnOne

const ContainerStyle = styled.section`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${COLORS.cE0E0E0};
  padding-bottom: 30px;
`

const BtnBoxStyle = styled.section`
  text-align: right;
  padding: 30px 0;
  button {
    font-size: ${FONTSIZE.fz16};
    font-weight: ${FONTWEGHT.fw600};
  }
`

const CardSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`
