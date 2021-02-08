import { css } from '@emotion/react'
import { CSSProperties } from 'react'

interface FlexOptions {
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  direction?: CSSProperties['flexDirection'];
}

export const flex = (options?: FlexOptions) => {
  const defaultOptions = { align: 'flex-start', direction: 'row', justify: 'flex-start' }
  const { align, direction, justify } = { ...defaultOptions, ...options }

  return css`
    display: flex;
    align-items: ${align};
    flex-direction: ${direction};
    justify-content: ${justify};
  `
}

export const horizontalGutter = (space: number) => {
  return css`
    & > * + * {
      margin-left: ${space}px;
    }
  `
}
type SizeOption = 'full' | 'half'
export const widthLayout = (size: SizeOption) => {
  return css`
    width: ${size === 'full' ? '100%' : '50%'};
  `
}

export const heightLayout = (size: SizeOption) => {
  return css`
    height: ${size === 'full' ? '100%' : '50%'};
  `
}

interface AbsoluteOptions {
  top?: CSSProperties['top'];
  bottom?: CSSProperties['bottom'];
  left?: CSSProperties['left'];
  right?: CSSProperties['right'];
}

export const relative = css`position: relative;`

export const absolute = ({
  top = 'unset',
  bottom = 'unset',
  left = 'unset',
  right = 'unset',
}: AbsoluteOptions) => {
  return css`
    position: absolute;
    top: ${top};
    bottom: ${bottom};
    left: ${left};
    right: ${right};
  `
}
