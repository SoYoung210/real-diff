import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'

import { ROUTE, SETTING_ROUTE_TYPE } from '@/constants/routes'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  align-items: center;
`

const RealDiffLink = styled.a`
  cursor: pointer;
  color: #3182F6;
  padding-bottom: 1px;
  border-bottom: 1px solid #3182F6;
  height: min-content;
`

const SettingLink = styled(Link)`
  background: #F2F4F6;
  padding: 10px 0;
  min-width: 84px;
  text-align: center;
  border-radius: 8px;
  text-decoration: none;
`

export const Footer = () => {
  return (
    <Container>
      <RealDiffLink>real-diff@0.1.1</RealDiffLink>
      <SettingLink to={`${ROUTE.SETTINGS}/${SETTING_ROUTE_TYPE.TOKEN}`}>
        Config
      </SettingLink>
    </Container>
  )
}
