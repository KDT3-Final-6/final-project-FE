import { COLORS, FONTWEGHT } from '@src/styles/root'
import React from 'react'
import styled from 'styled-components'
import CheckItem from './CheckItem'
import { GroupStyle, WrapStyle } from './GroupTabs'
import Title, { TitleStyle } from './Title'

interface IConceptTabs {
  title?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  value?: string
}

const ConceptTabs = ({ title = false, onChange, value }: IConceptTabs) => {
  const conceptTabs = [
    {
      id: 'shopping',
      tabName: '쇼핑',
    },
    {
      id: 'wine',
      tabName: '와인',
    },
    {
      id: 'culture',
      tabName: '문화탐방',
    },
    {
      id: 'amen',
      tabName: '성지순례',
    },
    {
      id: 'volunteer',
      tabName: '봉사활동',
    },
    {
      id: 'trekking',
      tabName: '트래킹',
    },
    {
      id: 'golf',
      tabName: '골프',
    },
  ]

  return (
    <ConceptStyle>
      {title && <Title titleType="h3" title="컨셉" fontSize="26px" fontWeight={FONTWEGHT.fw600} />}
      <WrapStyle>
        {conceptTabs.map((conceptTab) => (
          <CheckItem
            key={conceptTab.id}
            checkType="tabType"
            type="checkbox"
            id={conceptTab.id}
            labelName={conceptTab.tabName}
            value={conceptTab.tabName}
            width={
              conceptTab.tabName.length === 2
                ? '82px'
                : conceptTab.tabName.length === 3
                ? '102px'
                : conceptTab.tabName.length === 4
                ? '122px'
                : '138px'
            }
            onChange={onChange}
          />
        ))}
      </WrapStyle>
    </ConceptStyle>
  )
}

export default ConceptTabs

const ConceptStyle = styled(GroupStyle)`
  ${WrapStyle} {
    padding-top: 10px;
    padding-bottom: 0;
  }

  ${TitleStyle} {
    padding-right: 40px;
    border-right: 1px solid ${COLORS.cd9d9d9};
  }

  h3 {
    margin-top: 10px;
  }

  input {
    &#shopping:checked {
      &::before {
        background-color: ${COLORS.cFFB0B0};
      }
      & ~ label {
        color: ${COLORS.c813333};
      }
    }
    &#wine:checked {
      &::before {
        background-color: ${COLORS.cFFB0E9};
      }
      & ~ label {
        color: ${COLORS.c813346};
      }
    }
    &#culture:checked {
      &::before {
        background-color: ${COLORS.cDCB0FF};
      }
      & ~ label {
        color: ${COLORS.c5E3381};
      }
    }
    &#amen:checked {
      &::before {
        background-color: ${COLORS.cFFE9B0};
      }
      & ~ label {
        color: ${COLORS.c725C24};
      }
    }
    &#volunteer:checked {
      &::before {
        background-color: ${COLORS.c74fff7};
      }
      & ~ label {
        color: ${COLORS.c1B5754};
      }
    }
    &#trekking:checked {
      &::before {
        background-color: ${COLORS.cE6FFB0};
      }
      & ~ label {
        color: ${COLORS.c3E8133};
      }
    }
    &#golf:checked {
      &::before {
        background-color: ${COLORS.cB0C6FF};
      }
      & ~ label {
        color: ${COLORS.c335281};
      }
    }
  }
`
