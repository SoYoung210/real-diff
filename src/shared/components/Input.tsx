import styled from '@emotion/styled'
import React, { InputHTMLAttributes, ReactText } from 'react'

const StyledInput = styled.input`
  padding: 6px 14px;
  background: #E5E8EB;
  border-radius: 16px;
  color: #8a95a1;
  font-weight: 800;
  font-size: 12px;
  line-height: 16px;

  &::placeholder {
    color: #ffffff;
  }
`

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: ReactText;
  placeholder?: string;
}

export const Input = ({
  value,
  placeholder,
  ...inputAttrs
}: Props) => {

  return (
    <StyledInput
      value={value}
      placeholder={placeholder}
      {...inputAttrs}
    />
  )
}
