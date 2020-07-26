import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'

import { Footer } from '@/components/shared/Footer'
import { MainHeader } from '@/components/shared/MainHeader'
import { settingActions, settingSelector } from '@/features/settingSlice'

const ContentWrapper = styled.div`
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #8B95A1;
  font-size: 14px;
  line-height: 22px;
`

const BoldText = styled.div`
  font-weight: 900;
`

export const HomeView = () => {
  const dispatch = useDispatch()
  const isPullRequestPath =
    useSelector(settingSelector.isPullRequestPath)

  // FIXME: this component called twice
  useEffect(() => {
    dispatch(settingActions.requestPath())
    dispatch(settingActions.syncIgnoreFileList())
  }, [dispatch])


  if (isPullRequestPath) {
    return <Redirect path='/' to='/main'/>
  }

  return (
    <>
      <MainHeader title='sHow Real Diff' highlightIndex={[1, 11]}/>
      <ContentWrapper>
        <BoldText>Is here PR page?</BoldText>
        <div>:thinking_face:</div>
      </ContentWrapper>
      <Footer />
    </>
  )
}
