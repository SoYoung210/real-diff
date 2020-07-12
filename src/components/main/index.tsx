import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { prActions, prSelector } from '@/features/prSlice'

export const MainView = () => {
  const dispatch = useDispatch()
  const realDiff = useSelector(prSelector.realDiff)
  useEffect(() => {
    dispatch(prActions.fetch())
  },[dispatch])

  return (
    <>
      <div>Real Additions: {realDiff.additions}</div>
      <div>Real Deletions: {realDiff.deletions}</div>
      <Link to='/settings'>Setting</Link>
    </>
  )
}
