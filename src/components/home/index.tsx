import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { settingActions } from '@/features/settingSlice'

export const HomeView = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(settingActions.requestPath())

  }, [dispatch])

  return (
    <div>Home</div>
  )
}
