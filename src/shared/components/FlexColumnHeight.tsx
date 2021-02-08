import { Theme } from '@emotion/react'
import styled, { Interpolation } from '@emotion/styled'
import React, { CSSProperties } from 'react'

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: ${(props: Pick<CSSProperties, 'height'>) => `calc(100% - ${props.height}px)`};
`

interface Props {
  children: React.ReactNode;
  offsetTopHeight: number;
  // emotion css prop과 다른 이름으로 전달
  cssProp?: Interpolation<Theme>
}

export const FlexColumnHeight = ({
  children,
  offsetTopHeight,
  cssProp,
}: Props) => {
  return (
    <StyledContentWrapper height={offsetTopHeight} css={cssProp}>
      {children}
    </StyledContentWrapper>
  )
}
