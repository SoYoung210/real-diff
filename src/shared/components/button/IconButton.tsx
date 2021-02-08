import styled from '@emotion/styled'

export const IconButton = styled.button`
  width: 14px;
  height: 14px;
  /* Touch Area */
  padding: 2px;
  margin: -2px 0 0 -2px;
  background: url(${(props: { bg: string }) => props.bg});
`
