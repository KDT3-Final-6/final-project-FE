import CardTypeItem from '@src/components/common/CardTypeItem'
import Input from '@src/components/common/Input'
import Paginate from '@src/components/common/Paginate'
import Select from '@src/components/common/Select'
import Inner from '@src/layout/Inner'
import { useGetSearchListQuery } from '@src/reduxStore/api/searchApiSlice'
import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React, { useState } from 'react'
import { FieldErrors, SubmitErrorHandler, useForm, FieldValues } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

export interface ISearchForm {
  search: string
}

const Search = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const title = searchParams.get('keyword')

  const selectOptions = ['인기순', '가격높은순', '가격낮은순']
  const [currentValue, setCurrentValue] = useState<string>(selectOptions[0])
  const [page, setPage] = useState<number>(1)

  const { data: searchList, isLoading } = useGetSearchListQuery(
    { keyword: title, sortTarget: currentValue, page },
    { refetchOnMountOrArgChange: true }
  )
  if (isLoading) <>Loading</>

  const products = searchList && searchList.content
  const hasProducts = products && products.length > 0

  const { register, handleSubmit, setValue } = useForm<ISearchForm>()

  const onValid = (data: FieldValues, event: any) => {
  const onValid = (data: FieldValues, event: any) => {
    event.preventDefault()
    navigate(`/search?keyword=${data.search}`)
  }

  const onInvalid = (data: FieldErrors) => {
    alert(data.search?.message)
  const onInvalid = (data: FieldErrors) => {
    alert(data.search?.message)
  }

  const changePageHandler = (event: { selected: number }) => {
    setPage(event.selected + 1)
  }

  return (
    <section>
      <Inner>
        <InputContainerStyle onSubmit={handleSubmit(onValid, onInvalid)}>
          <Input
            inputType="searchInput"
            type="text"
            width="500px"
            height="56px"
            placeholder="여행 그룹이나 상품을 검색해보세요."
            borderColor="none"
            register={register('search', {
              required: '검색어를 입력해주세요.',
            })}
          />
        </InputContainerStyle>
        <TitleStyle>통합 검색</TitleStyle>
        {hasProducts ? (
          <ResultContainerStyle>
            <FilterboxStyle>
              <p>{products.length}건의 검색 결과</p>
              <Select
                currentValue={currentValue}
                setCurrentValue={setCurrentValue}
                options={selectOptions}
                initial={selectOptions[0]}
              />
            </FilterboxStyle>
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
                />
              ))}
            </ProductListStyle>
            <Paginate totalElements={searchList.totalPages} changePageHandler={changePageHandler} />
          </ResultContainerStyle>
        ) : (
          <ResultMsgContainerStyle>
            <p>검색 결과가 없습니다.</p>
          </ResultMsgContainerStyle>
        )}
      </Inner>
    </section>
  )
}

export default Search

const InputContainerStyle = styled.form`
  width: 100%;
  height: 293px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TitleStyle = styled.div`
  font-weight: ${FONTWEGHT.fw500};
  font-size: ${FONTSIZE.fz26};
  line-height: 150%;
  padding-bottom: 12px;
  border-bottom: 1px solid ${COLORS.cE0E0E0};
`

const ResultContainerStyle = styled.div`
  padding-top: 33px;
  padding-bottom: 178px;
`

const FilterboxStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 54px;
  font-size: ${FONTSIZE.fz20};
  font-weight: ${FONTWEGHT.fw500};
  line-height: 1.5;
`

const ProductListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 11px;
  padding-bottom: 100px;
`

const ResultMsgContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  padding-top: 130px;
  padding-bottom: 178px;
`
