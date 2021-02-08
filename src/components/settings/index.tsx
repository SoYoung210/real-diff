import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import { SettingNavigation } from '@/components/shared/SettingNavigation'
import { SETTING_ROUTE_TYPE } from '@/constants/routes'
import { FileListSettingView } from '@/settings/subtab/fileList'

// import { FileListSettingView } from './FileList'
import { TokenSettingView } from './Token'

// TODO: 완전히 재사용 가능하도록 Title이랑 Link주입받는 것 고려해보기
export const SettingsView = () => {
  const match = useRouteMatch()

  return (
    <>
      <SettingNavigation />
      <Switch>
        <Route
          path={`${match.url}/${SETTING_ROUTE_TYPE.FILE_LIST}`}
          component={FileListSettingView}
        />
        <Route
          path={`${match.url}/${SETTING_ROUTE_TYPE.TOKEN}`}
          component={TokenSettingView}
        />
      </Switch>
    </>
  )
}
