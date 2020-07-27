import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Input } from '@/components/shared/Input'
import { settingActions } from '@/features/settingSlice'

const InputContainer = styled.div`
  display: flex;
  padding: 12px 0;

  & > input + button {
    margin-left: 6px;
  }

  & > input {
    flex: 1;
  }
`

// TODO: Refactor to shared button
const SaveButton = styled.button`
  padding: 6px 0px;
  background: #5AE9AD;
  color: #ffffff;
  border-radius: 8px;
  font-size: 12px;
  min-width: 82px;
`
// https://docs.github.com/en/rest/reference/pulls#list-pull-requests-files
export const TokenSettingView = () => {
  const dispatch = useDispatch()
  const [token, setToken] = useState('')

  const saveToken = () => {
    dispatch(settingActions.saveToken(token))
  }

  return (
    <>
      <InputContainer>
        <Input
          value={token}
          placeholder='Input Your GitHub Token'
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            setToken(target.value)
          }
        />
        <SaveButton onClick={saveToken}>Add</SaveButton>
      </InputContainer>
    </>
  )
}
