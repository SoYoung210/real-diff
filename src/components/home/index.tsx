import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'

import { FetchStateWrapper } from '@/components/shared/FetchStateWrapper'
import { settingActions, settingSelector } from '@/features/settingSlice'

export const HomeView = () => {
  const dispatch = useDispatch()
  const isPullRequestPath =
    useSelector(settingSelector.isPullRequestPath)

  useEffect(() => {
    dispatch(settingActions.requestPath())
    dispatch(settingActions.requestSyncToken())
  }, [dispatch])


  if (isPullRequestPath) {
    return <Redirect path='/' to='/main'/>
  }

  return (
    <div>Go To PullRequest Page~</div>
  )
}
