import styled from '@emotion/styled'
import React, { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react'

const StyledButton = styled.button`
  padding: 6px 0px;
  background: #5AE9AD;
  color: #ffffff;
  border-radius: 8px;
  font-size: 12px;
  min-width: ${(props: Pick<CSSProperties, 'width'>) => `${props.width}px`};
`

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  minWidth?: number;
}

export const TextButton = ({
  children,
  minWidth = 82,
  ...rest
}: Props) => {
  return (
    <StyledButton width={minWidth} {...rest}>
      {children}
    </StyledButton>
  )
}
