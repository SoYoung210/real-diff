import styled from '@emotion/styled'
import React, { FormEvent } from 'react'

import { TextButton } from '@/shared/components/button/TextButton'
import { ContentWrapper } from '@/shared/components/ContentWrapper'
import { Input } from '@/shared/components/Input'
import { ListItem } from '@/shared/components/ListItem'
import { useControlledInput } from '@/shared/hooks/useControlledInput'
import { flex, horizontalGutter } from '@/shared/utils/styles'

import { useFileListStorage } from './hooks/useFileList'

// TODO: duplicate item validation
export const FileListSettingView = () => {
  const [fileName, , handleFileNameChange] = useControlledInput('')
  const { add, fileListFromStorage } = useFileListStorage()

  return (
    <ContentWrapper offsetTopHeight={46}>
      <FileList css={flex()}>
        { /** shared/ListItem과 RemoveButton사용 */}
        {
          fileListFromStorage.map((fileName) => {
            return (
              <ListItem key={fileName}>

              </ListItem>
            )
          })
        }
      </FileList>
      <form
        css={[flex(), horizontalGutter(6)]}
        onSubmit={(e: FormEvent) => {
          e.preventDefault()
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
