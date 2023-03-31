import { COLORS, FONTSIZE, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'
import CheckItem from './CheckItem'
import Title, { TitleStyle } from './Title'

interface IGroupTabs {
  title?: boolean
}

const GroupTabs = ({ title = false }: IGroupTabs) => {
  const groupTabs = [
    {
      id: 'age5070',
      tabName: '5070끼리',
    },
    {
      id: 'males',
      tabName: '남자끼리',
    },
    {
      id: 'females',
      tabName: '여자끼리',
    },
    {
      id: 'family',
      tabName: '가족끼리',
    },
    {
      id: 'anybody',
      tabName: '누구든지',
    },
  ]

  return (
    <GroupStyle>
      {title && <Title titleType="h3" title="그룹" fontSize="26px" fontWeight={FONTWEGHT.fw600} />}
      <WrapStyle>
        {groupTabs.map((groupTab) => (
          <CheckItem
            key={groupTab.id}
            checkType="tabType"
            type="radio"
            id={groupTab.id}
            name="group"
            labelName={groupTab.tabName}
            width={
              groupTab.tabName.length === 2
                ? '82px'
                : groupTab.tabName.length === 3
                ? '102px'
                : groupTab.tabName.length === 4
                ? '122px'
                : '138px'
            }
          />
        ))}
      </WrapStyle>
    </GroupStyle>
  )
}

export default GroupTabs

export const GroupStyle = styled.div`
  display: flex;

  ${TitleStyle} {
    padding-right: 40px;
    border-right: 1px solid ${COLORS.cd9d9d9};
  }

  h3 {
    height: 57px;
    display: flex;
    align-items: center;
  }

  label {
    width: 100%;
    font-size: ${FONTSIZE.fz19};
    font-weight: ${FONTWEGHT.fw500};
    color: ${COLORS.c7c7c7c};
  }

  input {
    &#age5070:checked,
    &#males:checked,
    &#females:checked,
    &#family:checked,
    &#anybody:checked {
      width: 145px;
      & ~ label {
        padding-left: 30px;
      }
    }
    &#age5070:checked {
      width: 160px;
    }
    &:checked::before {
      box-sizing: border-box;
      padding-left: 20px;
    }
    &#age5070:checked {
      &::before {
        content: url('/images/icons/tabAge5070.png');
        background-color: ${COLORS.cAF50D0};
      }
    }
    &#males:checked {
      &::before {
        content: url('/images/icons/tabMales.png');
        background-color: ${COLORS.c4BBE87};
      }
    }
    &#females:checked {
      &::before {
        content: url('/images/icons/tabFemales.png');
        background-color: ${COLORS.cbe4b4b};
      }
    }
    &#family:checked {
      &::before {
        content: url('/images/icons/tabFamily.png');
        background-color: ${COLORS.c4688EA};
      }
    }
    &#anybody:checked {
      &::before {
        content: url('/images/icons/tabAnybody.png');
        background-color: ${COLORS.cF0A22D};
      }
    }
  }
`

export const WrapStyle = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 10px;
  padding-left: 40px;
`
