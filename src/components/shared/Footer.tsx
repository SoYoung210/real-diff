import React from 'react'
import { Link } from 'react-router-dom'

import { ROUTE, SETTING_ROUTE_TYPE } from '@/constants/routes'

export const Footer = () => {
  return (
    <Link to={`${ROUTE.SETTINGS}/${SETTING_ROUTE_TYPE.TOKEN}`}>Setting</Link>
  )
}
