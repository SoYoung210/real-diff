import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Footer } from '@/components/shared/Footer'
import { MainHeader } from '@/components/shared/MainHeader'
import { prActions, prSelector } from '@/features/prSlice'

const DiffText = styled.div`
  font-size: 48px;
  font-weight: 800;
  color: ${props =>  props.color};
`

// 52px: header height
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 52px);
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
    dispatch(prActions.fetch())
  },[dispatch])

  return (
    <>
      <MainHeader title='Show Real Diff' highlightIndex={[6, 10]}/>
      <ContentWrapper>
        <ContentContainer>
          <DiffText color='#00A661'>+{realDiff.additions}</DiffText>
          <DiffText color='#B71C1C'>-{realDiff.deletions}</DiffText>
        </ContentContainer>
        <Footer />
      </ContentWrapper>
    </>
  )
}
