import styled from '@emotion/styled'
import React, { CSSProperties } from 'react'

const StyledButton = styled.button`
  padding: 6px 0px;
  background: #5AE9AD;
  color: #ffffff;
  border-radius: 8px;
  font-size: 12px;
  min-width: ${(props: Pick<CSSProperties, 'width'>) => `${props.width}px`};
`

interface Props {
  buttonText: string;
  minWidth?: number;
  onClick: () => void;
}

export const Button = ({
  buttonText,
  minWidth = 82,
  onClick,
}: Props) => {
  return (
    <StyledButton width={minWidth} onClick={onClick}>
      {buttonText}
    </StyledButton>
  )
}
