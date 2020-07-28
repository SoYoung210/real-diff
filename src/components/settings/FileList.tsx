import styled from '@emotion/styled'
import React, { KeyboardEvent, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'

import { IgnoredFile } from '@/domain/ignoreFile'
import { settingActions,settingSelector } from '@/features/settingSlice'

import { Input } from '../shared/Input'
import { InputContainer } from '../shared/SettingInputContainer'
import { FileListItem } from './FileListItem'

const SaveButton = styled.button`
  padding: 6px 0px;
  background: #5AE9AD;
  color: #ffffff;
  border-radius: 8px;
  font-size: 12px;
  min-width: 82px;
`

// TODO: 폴더를 나눌지 그냥 여기서 다 쓸지 고민해서 정하기.
const renderFileList = (
  onClickDelete: Function,
) => ({fileName}: IgnoredFile) => (
  <li key={fileName}>
    <button onClick={ () => onClickDelete(fileName)}>X {' '}</button>
    <span>{fileName}</span>
  </li>
)

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
    <>
      <ol>
        {
          ignoreFileList.map(({fileName}, idx) =>
            <FileListItem
              key={`${fileName}-${idx}`}
              title={fileName}
              onClick={() => removeItem(fileName)}
            />,
          )
        }
      </ol>
      <InputContainer>
        <Input
          value={fileNameToBeAdded}
          placeholder='Add ignore file name'
          onChange={({target}) =>
            setFileNameToBeAdded(target.value)
          }
          onKeyPress={onKeyPressed}
        />
        <SaveButton onClick={addIgnoreFileName}>ADD</SaveButton>
      </InputContainer>
    </>
  )
}
