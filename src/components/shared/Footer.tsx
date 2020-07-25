import React from 'react'
import { Link } from 'react-router-dom'

import { ROUTE } from '@/constants/routes'

export const Footer = () => {
  return (
    <Link to={ROUTE.SETTINGS}>Setting</Link>
  )
}
