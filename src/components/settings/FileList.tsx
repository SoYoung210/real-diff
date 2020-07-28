import styled from '@emotion/styled'
import React, { KeyboardEvent, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'

import { Button } from '@/components/shared/Button'
import { ContentWrapper } from '@/components/shared/ContentWrapper'
import { Input } from '@/components/shared/Input'
import { InputContainer } from '@/components/shared/SettingInputContainer'
import { settingActions,settingSelector } from '@/features/settingSlice'

import { FileListItem } from './FileListItem'

const SaveButton = styled.button`
  padding: 6px 0px;
  background: #5AE9AD;
  color: #ffffff;
  border-radius: 8px;
  font-size: 12px;
  min-width: 82px;
`

const StyledListWrapper = styled.ol`
  flex: 1;
  padding: 6px 4px 0 0;
`

export const FileListSettingView = () => {
  const dispatch = useDispatch()
  const ignoreFileList = useSelector(
    settingSelector.ignoreFileList,
  )
  const [fileNameToBeAdded, setFileNameToBeAdded] = useState('')

  const onKeyPressed = ({key}: KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      addIgnoreFileName()
    }
  }

  const removeItem = (fileName: string) => {
    dispatch(settingActions.removeIgnoreFile(fileName))
  }

  const addIgnoreFileName = () => {
    setFileNameToBeAdded('')
    dispatch(settingActions.addIgnoreFile({
      fileName: fileNameToBeAdded,
      ignore: true,
    }))
  }

  return (
    <ContentWrapper offsetTopHeight={46}>
      <StyledListWrapper>
        {
          ignoreFileList.map(({fileName}, idx) =>
            <FileListItem
              key={`${fileName}-${idx}`}
              title={fileName}
              onClick={() => removeItem(fileName)}
            />,
          )
        }
      </StyledListWrapper>
      <InputContainer>
        <Input
          value={fileNameToBeAdded}
          placeholder='Add ignore file name'
          onChange={({target}) =>
            setFileNameToBeAdded(target.value)
          }
          onKeyPress={onKeyPressed}
        />
        <Button buttonText='ADD' onClick={addIgnoreFileName} />
      </InputContainer>
    </ContentWrapper>
  )
}
