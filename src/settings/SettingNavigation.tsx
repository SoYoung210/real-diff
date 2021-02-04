import styled from '@emotion/styled'
import React from 'react'
import { useRouteMatch } from 'react-router-dom'

import { SETTING_ROUTE_TYPE } from '@/constants/routes'
import { NavigationTab } from '@/shared/components/NavigationTab'
import { flex } from '@/shared/utils/styles'

export const SettingNavigation = () => {
  const match = useRouteMatch()

  return (
    <StickyNav css={flex({ justify: 'space-around' })}>
      <NavigationTab to={`${match.url}/${SETTING_ROUTE_TYPE.FILE_LIST}`}>
        Ignore
      </NavigationTab>
      <NavigationTab to={`${match.url}/${SETTING_ROUTE_TYPE.FILE_LIST}`}>
        Ignore
      </NavigationTab>
    </StickyNav>
  )
}

const StickyNav = styled.header`
  color: #B0B8C1;
  font-weight: bold;
`
