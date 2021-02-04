import { css } from '@emotion/react'
import { ComponentProps } from 'react'
import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = Omit<ComponentProps<NavLink>, 'activeClassName'>

export const NavigationTab = ({ children, ...props }: Props) => {
  return (
    <NavLink
      activeClassName='active'
      css={css`
        padding: 14px 0;
        flex: 1;
        text-align: center;

        &.active {
          color: #1CD98A;
          border-bottom: 2px solid #1CD98A;
        }
      `}
      {...props}
    >
      {children}
    </NavLink>
  )
}
