import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Button } from '@/components/shared/Button'
import { Input } from '@/components/shared/Input'
import { InputContainer } from '@/components/shared/SettingInputContainer'
import { settingActions } from '@/features/settingSlice'

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
        <Button buttonText='ADD' onClick={saveToken} />
      </InputContainer>
    </>
  )
}
