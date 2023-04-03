import React, { SetStateAction } from 'react'
import CheckItem from '../common/CheckItem'
import Title from '../common/Title'
import { FONTSIZE, COLORS, FONTWEGHT } from '@src/styles/root'
import styled from 'styled-components'

interface Props {
  setGroup: React.Dispatch<SetStateAction<string>>
  title: string
}

const GroupTabs = ({ setGroup, title }: Props) => {
  const groupTabs = [
    {
      id: '5070끼리',
      tabName: '5070끼리',
    },
    {
      id: '남자끼리',
      tabName: '남자끼리',
    },
    {
      id: '여자끼리',
      tabName: '여자끼리',
    },
    {
      id: '가족끼리',
      tabName: '가족끼리',
    },
    {
      id: '누구든지',
      tabName: '누구든지',
    },
  ]
  const groupChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroup(event.target.id)
  }

  return (
    <>
      <Title titleType="h2" fontSize={FONTSIZE.fz32} title={title}></Title>
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
            onChange={groupChangeHandler}
          />
        ))}
      </WrapStyle>
    </>
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
    &#5070끼리:checked,
    &#남자끼리:checked,
    &#여자끼리:checked,
    &#가족끼리:checked,
    &#누구든지:checked {
      width: 145px;
      & ~ label {
        padding-left: 30px;
      }
    }
    &:checked::before {
      box-sizing: border-box;
      padding: 0 20px;
    }
    &#5070끼리:checked {
      width: 160px;
      &::before {
        content: url('/images/icons/tabAge5070.png');
        background-color: ${COLORS.cAF50D0};
      }
    }
    &#남자끼리:checked {
      &::before {
        content: url('/images/icons/tabMales.png');
        background-color: ${COLORS.c4BBE87};
      }
    }
    &#여자끼리:checked {
      &::before {
        content: url('/images/icons/tabFemales.png');
        background-color: ${COLORS.cbe4b4b};
      }
    }
    &#가족끼리:checked {
      &::before {
        content: url('/images/icons/tabFamily.png');
        background-color: ${COLORS.c4688EA};
      }
    }
    &#누구든지:checked {
      &::before {
        content: url('/images/icons/tabAnybody.png');
        background-color: ${COLORS.cF0A22D};
      }
    }
  }
`

export default GroupTabs
