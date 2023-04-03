import React, { SetStateAction } from 'react'
import CheckItem from '@src/components/common/CheckItem'
import styled from 'styled-components'
import districtTab from '@src/constants/districtTab'

interface Props {
  setCheckTab: React.Dispatch<SetStateAction<string[]>>
}

const DistrictCheckTab = ({ setCheckTab }: Props) => {
  const changeCheckTab = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckTab((prev) => {
      if (prev.includes(event.target.id)) {
        prev.splice(prev.indexOf(event.target.id), 1)
        return [...prev]
      } else return [...prev, event.target.id]
    })
  }
  return (
    <TabStyle>
      {districtTab.map((district) => (
        <CheckItem
          key={district.categoryId}
          checkType="districtTab"
          type="checkbox"
          id={String(district.categoryId)}
          labelName={district.district}
          width="150px"
          color={district.color}
          bgColor={district.bgColor}
          onChange={changeCheckTab}
        />
      ))}
    </TabStyle>
  )
}

const TabStyle = styled.div`
  display: flex;
  gap: 17px;
  justify-content: center;
  flex-wrap: wrap;
`

export default DistrictCheckTab
