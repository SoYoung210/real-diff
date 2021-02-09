import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { FormEvent } from 'react'

import { TextButton } from '@/shared/components/button/TextButton'
import { Input } from '@/shared/components/Input'
import { Ternary } from '@/shared/components/Ternary'
import { useControlledInput } from '@/shared/hooks/useControlledInput'
import { absolute, flex, fontWeight, heightLayout, horizontalGutter, relative, verticalGutter, widthLayout } from '@/shared/utils/styles'

import { useGitHubToken } from './hooks/useGitHubToken'

const REAL_DIFF_STORE_LINK = 'https://chrome.google.com/webstore/detail/real-diff/noolkogacjfdckeeclgddpabknbnjacd?hl=ko&'
const PERSONAL_GITHUB_TOKEN_LINK = 'https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token'

export const TokenSettingView = () => {
  const { isExist, update } = useGitHubToken()
  const [token, setToken, handleTokenChange] = useControlledInput('')

  return (
    <div css={[relative, heightLayout('full')]}>
      <div css={[
        flex({ justify: 'center', direction: 'column', align: 'center' }),
        verticalGutter(4),
        css`
          color: #8B95A1;
          /** form height */
          height: calc(100% - 28px);
        `,
      ]}>
        <Ternary
          condition={isExist}
          trueComponent={
            <>
              <Title css={fontWeight('bold')}>
                200 Token Exist!
              </Title>
              <StyledLink target='_blank' rel='noreferrer' href={REAL_DIFF_STORE_LINK}>
                Review Real Diff
              </StyledLink>
            </>
          }
          falseComponent={
            <>
              <Title css={fontWeight('bold')}>404 NotFound</Title>
              <StyledLink
                target='_blank' rel='noreferrer' href={PERSONAL_GITHUB_TOKEN_LINK}
                css={css`
                  color: #2f5fd2;
                  border-bottom: 1px solid #2f5fd2;
                  font-size: 10px;
                `}
              >
                Please Add GitHub Auth Token
              </StyledLink>
              <div css={css`font-size:12px;`}>:sob:</div>
            </>
          }
        />
      </div>
      <form
        css={[flex(), widthLayout('full'), horizontalGutter(6), absolute({ bottom: '0' })]}
        onSubmit={(e: FormEvent) => {
          e.preventDefault()
          setToken('')
          update(token as string)
        }}
      >
        <Input
          value={token}
          placeholder='Enter Your GitHub Token'
          onChange={handleTokenChange}
          css={css`flex: 1;`}
        />
        <TextButton>ADD</TextButton>
      </form>
    </div>
  )
}

const Title = styled.div`
  font-size: 14px;
  line-height: 22px;
`

const StyledLink = styled.a`
  color: #2f5fd2;
  padding-bottom: 1px;
  border-bottom: 1px solid #2f5fd2;
  font-size: 10px;
  line-height: 12px;
`
