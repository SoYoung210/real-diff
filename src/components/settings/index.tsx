import styled from '@emotion/styled'
import React from 'react'
import { NavLink,Route, Switch, useRouteMatch } from 'react-router-dom'

import { SETTING_ROUTE_TYPE } from '@/constants/routes'

import { FileListSettingView } from './FileList'
import { TokenSettingView } from './Token'

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
  const match = useRouteMatch()

//'/settings/file-list'
  return (
    <>
      <StickyNav>
        <StyledNavLink
          activeClassName='active'
          to={`${match.url}/${SETTING_ROUTE_TYPE.FILE_LIST}`}
        >
          Files
        </StyledNavLink >
        <StyledNavLink
          activeClassName='active'
          to={`${match.url}/${SETTING_ROUTE_TYPE.TOKEN}`}
        >
          Token
        </StyledNavLink >
      </StickyNav>
      <Switch>
        <Route
          path={`${match.url}/${SETTING_ROUTE_TYPE.FILE_LIST}`}
          component={TokenSettingView}
        />
        <Route
          path={`${match.url}/${SETTING_ROUTE_TYPE.TOKEN}`}
          component={FileListSettingView}
        />
      </Switch>
    </>
  )
}
