import React, { SetStateAction } from 'react'
import CheckItem from '../common/CheckItem'
import Title from '../common/Title'
import { FONTSIZE, COLORS, FONTWEGHT } from '@src/styles/root'
import styled from 'styled-components'

interface Props {
  setGroup: React.Dispatch<SetStateAction<string>>
  title: string
  labelName: string
}

const GroupTabs = ({ setGroup, title, labelName }: Props) => {
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

  const groupChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroup(event.target.id)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Title titleType="h2" fontSize={FONTSIZE.fz32} title={title}></Title>
      <WrapStyle>
        {groupTabs.map((groupTab) => (
          <CheckItem
            key={groupTab.id}
            checkType="tabType"
            type="radio"
            id={groupTab.id + labelName}
            name={labelName}
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
            onChange={groupChangeHandler}
            isChecked={groupTab.tabName === '5070끼리' && true}
          />
        ))}
      </WrapStyle>
    </div>
  )
}

const WrapStyle = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 10px;
  padding-left: 40px;
  margin-left: 40px;

  label {
    width: 100%;
    font-size: ${FONTSIZE.fz19};
    font-weight: ${FONTWEGHT.fw500};
    color: ${COLORS.c7c7c7c};
  }

  input {
    &:checked {
      width: 145px;
      & ~ label {
        padding-left: 30px;
      }
      &::before {
        content: '';
      }
    }
    &:checked::before {
      box-sizing: border-box;
      padding-left: 20px;
    }
    &[id^='age5070']:checked {
      width: 160px;
      &::before {
        content: url('/images/icons/tabAge5070.png');
        background-color: ${COLORS.cAF50D0};
      }
    }
    &[id^='males']:checked {
      &::before {
        content: url('/images/icons/tabMales.png');
        background-color: ${COLORS.c4BBE87};
      }
    }
    &[id^='females']:checked {
      &::before {
        content: url('/images/icons/tabFemales.png');
        background-color: ${COLORS.cbe4b4b};
      }
    }
    &[id^='family']:checked {
      &::before {
        content: url('/images/icons/tabFamily.png');
        background-color: ${COLORS.c4688EA};
      }
    }
    &[id^='anybody']:checked {
      &::before {
        content: url('/images/icons/tabAnybody.png');
        background-color: ${COLORS.cF0A22D};
      }
    }
  }
`

export default GroupTabs
