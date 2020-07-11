import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { prActions, prSelector } from '@/features/prSlice'

export const MainView = () => {
  const dispatch = useDispatch()
  const realDiff = useSelector(prSelector.realDiff)
  useEffect(() => {
    dispatch(prActions.fetch(window.location.pathname))
  },[dispatch])

  return (
    <>
      <div>MainView</div>
      <h1>Real Diff: {realDiff}</h1>
      <Link to='/settings'>Setting</Link>
    </>
  )
}
