import styled from '@emotion/styled'
import React, { LiHTMLAttributes, ReactNode } from 'react'

import { flex } from '../utils/styles'

interface Props extends LiHTMLAttributes<HTMLLIElement> {
  suffixAccessory?: ReactNode;
  children: ReactNode;
}

export const ListItem = ({
  children,
  suffixAccessory,
  ...props
}: Props) => {
  return (
    <Li css={flex({ align: 'center' })} {...props}>
      {children}
      {suffixAccessory != null ? suffixAccessory : null}
    </Li>
  )
}

const Li = styled.li`
  font-size: 12px;
  padding: 6px 0;

  color: #6B7684;
`
