import styled from '@emotion/styled'
import React, { CSSProperties } from 'react'

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: ${(props: Pick<CSSProperties, 'height'>) => `calc(100% - ${props.height}px)`};
`

interface Props {
  children: React.ReactNode;
  offsetTopHeight: number
}

export const ContentWrapper = ({
  children,
  offsetTopHeight,
}: Props) => {
  return (
    <StyledContentWrapper height={offsetTopHeight}>
      {children}
    </StyledContentWrapper>
  )
}
