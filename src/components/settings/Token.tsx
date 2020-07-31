import styled from '@emotion/styled'
import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@/components/shared/Button'
import { ContentWrapper } from '@/components/shared/ContentWrapper'
import { Input } from '@/components/shared/Input'
import { InputContainer } from '@/components/shared/SettingInputContainer'
import { settingActions, settingSelector } from '@/features/settingSlice'

const Content = styled.p`
  color: #8B95A1;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 4px;
  }
`

const StyledLink = styled.a`
  color: #2f5fd2;
  padding-bottom: 1px;
  border-bottom: 1px solid #2f5fd2;
  font-size: 10px;
  line-height: 12px;
`
const BoldText = styled.div`
  font-weight: 900;
`

const SmallText = styled.div`
  font-size: 12px;
  font-weight: 500;
`

// https://docs.github.com/en/rest/reference/pulls#list-pull-requests-files
export const TokenSettingView = () => {
  const dispatch = useDispatch()
  const [token, setToken] = useState('')
  const isTokenExist = useSelector(settingSelector.isTokenExist)

  useEffect(() => {
    dispatch(settingActions.checkTokenExist())
  }, [dispatch])

  const saveToken = () => {
    dispatch(settingActions.saveToken(token))
  }

  return (
    <>
      <ContentWrapper offsetTopHeight={46}>
        <Content>
          {
            isTokenExist
            ? (
              <>
                <BoldText>200 Token Exist!</BoldText>
                <StyledLink
                  href='https://chrome.google.com/webstore/detail/real-diff/noolkogacjfdckeeclgddpabknbnjacd?hl=ko&'
                >
                  Review Real Diff
                </StyledLink>
                <SmallText>:pray:</SmallText>
              </>
            )
            : (
              <>
                <BoldText>404 NotFound</BoldText>
                <StyledLink
                  href='https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token'
                  rel="nofollow"
                >
                  Please Add GitHub Auth Token
                </StyledLink>
                <SmallText>:sob:</SmallText>
              </>
            )
          }
        </Content>
      </ContentWrapper>
      <InputContainer>
        <Input
          value={token}
          placeholder='Enter Your GitHub Token'
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            setToken(target.value)
          }
        />
        <Button buttonText='ADD' onClick={saveToken} />
      </InputContainer>
    </>
  )
}
