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
