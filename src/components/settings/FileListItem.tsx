import styled from '@emotion/styled'
import React from 'react'

import removeIcon from '@/assets/close.svg'

const ListItem = styled.li`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  display: flex;
  align-items: center;
  padding: 6px 0;
  color: #6B7684;
`

// TODO: Expand Touch Area
const RemoveButton = styled.button`
  width: 12px;
  height: 12px;
  margin-left: auto;
  background: url(${(props: {bg: string}) => props.bg});
`

interface Props {
  title: string;
  onClick: () => void
}

export const FileListItem = ({title, onClick}: Props) => {
  return (
    <ListItem>
      {title}
      <RemoveButton onClick={onClick} bg={removeIcon}/>
    </ListItem>
  )
}
