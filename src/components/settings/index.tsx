import styled from '@emotion/styled'
import React from 'react'
import { NavLink,Route, Switch } from 'react-router-dom'

import { FileListSettingView } from './FileList'
import { TokenSettingsView } from './Token'

const StyledNavLink = styled(NavLink)`
  &.active {
    color: #18CD8C;
  }
`

const StickyNav = styled.header`
  display: flex;
  justify-content: space-around;
`

// https://docs.github.com/en/rest/reference/pulls#list-pull-requests-files
export const SettingsView = () => {
  return (
    <>
      <StickyNav>
        <StyledNavLink activeClassName='active' to='/settings/file-list'>
          Files
        </StyledNavLink >
        <StyledNavLink activeClassName='active' to='/settings/token'>
          Token
        </StyledNavLink >
      </StickyNav>
      <Switch>
        <Route path='/settings/token' component={TokenSettingsView} />
        <Route path='/settings/file-list' component={FileListSettingView} />
      </Switch>
    </>
  )
}
