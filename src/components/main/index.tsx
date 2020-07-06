import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { prActions } from '@/features/prSlice'

export const MainView = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(prActions.fetch(window.location.pathname))
  },[dispatch])

  return (
    <>
      <div>MainView</div>
      <Link to='/settings'>Setting</Link>
    </>
  )
}
