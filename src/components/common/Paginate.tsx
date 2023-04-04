import React from 'react'
import ReactPaginate from 'react-paginate'
import { TfiAngleRight, TfiAngleLeft } from 'react-icons/tfi'
import '@src/styles/paginate.css'

interface Props {
  totalElements: number
  changePageHandler: (event: any) => void
}

const Paginate = ({ totalElements, changePageHandler }: Props) => {
  return (
    <ReactPaginate
      pageCount={totalElements}
      pageRangeDisplayed={10}
      previousLabel={<TfiAngleLeft />}
      nextLabel={<TfiAngleRight />}
      onPageChange={changePageHandler}
      containerClassName="pagination-ul"
      activeClassName="current-page"
    />
  )
}

export default Paginate
