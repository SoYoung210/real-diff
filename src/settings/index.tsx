import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import { SETTING_ROUTE_TYPE } from '@/constants/routes'

import { SettingNavigation } from './SettingNavigation'

export const SettingView = () => {
  const match = useRouteMatch()

  return (
    <>
      <SettingNavigation />
      <Switch>
        <Route
          path={`${match.url}/${SETTING_ROUTE_TYPE.FILE_LIST}`}

        />
      </Switch>
    </>
  )
}
