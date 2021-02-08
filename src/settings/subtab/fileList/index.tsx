import styled from '@emotion/styled'
import React, { FormEvent } from 'react'

import removeIcon from '@/assets/close.svg'
import { IconButton } from '@/shared/components/button/IconButton'
import { TextButton } from '@/shared/components/button/TextButton'
import { ContentWrapper } from '@/shared/components/ContentWrapper'
import { Input } from '@/shared/components/Input'
import { ListItem } from '@/shared/components/ListItem'
import { useControlledInput } from '@/shared/hooks/useControlledInput'
import { flex, horizontalGutter } from '@/shared/utils/styles'

import { useFileListStorage } from './hooks/useFileList'
// TODO: duplicate item validation
export const FileListSettingView = () => {
  const [fileName, setFileName, handleFileNameChange] = useControlledInput('')
  const { add, remove, fileListFromStorage } = useFileListStorage()

  return (
    <ContentWrapper offsetTopHeight={46}>
      <FileList>
        {
          fileListFromStorage.map((fileName, index) => {
            return (
              <ListItem key={`${fileName}-${index}`}>
                {fileName}
                <IconButton
                  type='button'
                  onClick={() => remove(fileName)}
                  bg={removeIcon}
                />
              </ListItem>
            )
          })
        }
      </FileList>
      <form
        css={[flex(), horizontalGutter(6)]}
        onSubmit={(e: FormEvent) => {
          e.preventDefault()

          setFileName('')
          add(fileName as string)
        }}
      >
        <Input
          value={fileName}
          placeholder='Add ignore file name'
          onChange={handleFileNameChange}
        />
        <TextButton>ADD</TextButton>
      </form>
    </ContentWrapper>
  )
}

const FileList = styled.ol`
  padding: 6px 4px 0 0;
`
