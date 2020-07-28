import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ContentWrapper } from '@/components/shared/ContentWrapper'
import { Footer } from '@/components/shared/Footer'
import { MainHeader } from '@/components/shared/MainHeader'
import { prActions, prSelector } from '@/features/prSlice'

const DiffText = styled.div`
  font-size: 48px;
  font-weight: 800;
  color: ${props =>  props.color};
`

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  & > div {
    margin-left: 20px;
  }
`

export const MainView = () => {
  const dispatch = useDispatch()
  const realDiff = useSelector(prSelector.realDiff)
  useEffect(() => {
    // TODO: Remove comment
    // dispatch(prActions.fetch())
  },[dispatch])

  return (
    <>
      <MainHeader title='Show Real Diff' highlightIndex={[5, 10]}/>
      <ContentWrapper offsetTopHeight={52}>
        <ContentContainer>
          <DiffText color='#00A661'>+{realDiff.additions}</DiffText>
          <DiffText color='#B71C1C'>-{realDiff.deletions}</DiffText>
        </ContentContainer>
        <Footer />
      </ContentWrapper>
    </>
  )
}
