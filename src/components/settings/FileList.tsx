import styled from '@emotion/styled'
import React, { KeyboardEvent, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'

import { IgnoredFile } from '@/domain/ignoreFile'
import { settingActions,settingSelector } from '@/features/settingSlice'

const InputWrapper = styled.div`
  display: flex;
`

// TODO: Refactor to shared button
const AddButton = styled.button`
  padding: 8px 0px;
  margin-top: 10px;
  background: rgba(24,205,140,0.1);
  border-radius: 8px;
  color: #18CD8C;
  font-size: 14px;
`

// TODO: 폴더를 나눌지 그냥 여기서 다 쓸지 고민해서 정하기.
const renderFileList = (
  onClickDelete: Function,
) => ({fileName}: IgnoredFile) => (
  <li key={fileName}>
    <span onClick={ () => onClickDelete(fileName)}>X {' '}</span>
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
      <div>FileListSettingView</div>
      <ol>
        {
          ignoreFileList.map(renderFileList(removeItem))
        }
      </ol>
      <InputWrapper>
        <input
          value={fileNameToBeAdded}
          onChange={({target}) =>
            setFileNameToBeAdded(target.value)
          }
          onKeyPress={onKeyPressed}
        />
        <AddButton onClick={addIgnoreFileName}>ADD</AddButton>
      </InputWrapper>
    </>
  )
}
