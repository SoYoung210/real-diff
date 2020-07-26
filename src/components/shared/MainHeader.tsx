import styled from '@emotion/styled'
import React from 'react'

const Header = styled.header`
  height: 31px;
  border-top: 6px solid #5AE9AD;
  padding: 15px 2px 0 0;
  color: #E5E8EB;
  font-size: 36px;
  font-weight: 800;
  text-align: right;
  overflow: hidden;
`

const HighlightText = styled.span`
  color: #8a95a1;
`

interface Props {
  title: string;
  highlightIndex: number[]
}

// TODO: trim처리해서 idx받기
export const MainHeader = ({title, highlightIndex}: Props) => {
  return (
    <Header>
      {
        title.split('').map((s, idx) => {
          if (highlightIndex.includes(idx)) {
            return <HighlightText>{s}</HighlightText>
          }

          return s
        })
      }
    </Header>
  )
}
