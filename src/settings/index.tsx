import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import { SETTING_ROUTE_TYPE } from '@/constants/routes'
import { FlexColumnHeight } from '@/shared/components/FlexColumnHeight'

import { SettingNavigation } from './SettingNavigation'

export const SettingView = () => {
  const match = useRouteMatch()

  return (
    <>
      <SettingNavigation />
      <FlexColumnHeight offsetTopHeight={46}>
        <Switch>
          <Route
            path={`${match.url}/${SETTING_ROUTE_TYPE.FILE_LIST}`}
          />
        </Switch>
      </FlexColumnHeight>
    </>
  )
}
