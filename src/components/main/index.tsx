import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Footer } from '@/components/shared/Footer'
import { MainHeader } from '@/components/shared/MainHeader'
import { prActions, prSelector } from '@/features/prSlice'

export const MainView = () => {
  const dispatch = useDispatch()
  const realDiff = useSelector(prSelector.realDiff)
  useEffect(() => {
    dispatch(prActions.fetch())
  },[dispatch])

  return (
    <>
      <MainHeader title='Show Real Diff' highlightIndex={[6, 10]}/>
      <div>Real Additions: {realDiff.additions}</div>
      <div>Real Deletions: {realDiff.deletions}</div>
      <Footer />
    </>
  )
}
