import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { FormEvent, useEffect } from 'react'

import removeIcon from '@/assets/close.svg'
import { IconButton } from '@/shared/components/button/IconButton'
import { TextButton } from '@/shared/components/button/TextButton'
import { FlexColumnHeight } from '@/shared/components/FlexColumnHeight'
import { Input } from '@/shared/components/Input'
import { ListItem } from '@/shared/components/ListItem'
import { useControlledInput } from '@/shared/hooks/useControlledInput'
import { isEmpty } from '@/shared/utils/collection'
import { absolute, flex, heightLayout, horizontalGutter, relative, widthLayout } from '@/shared/utils/styles'

import { useFileListStorage } from './hooks/useFileList'


const DEFAULT_FILES = {
  PACKAGE_LOCK: 'package-lock.json',
  YARN_LOCK: 'yarn.lock',
  GIT_IGNORE: '.gitignore',
}
// TODO: duplicate item validation
export const FileListSettingView = () => {
  const [fileName, setFileName, handleFileNameChange] = useControlledInput('')
  const { add, remove, fileListFromStorage } = useFileListStorage()

  useEffect(() => {
    if (isEmpty(fileListFromStorage)) {
      add([
        DEFAULT_FILES.PACKAGE_LOCK, DEFAULT_FILES.YARN_LOCK, DEFAULT_FILES.GIT_IGNORE,
      ])
    }
  }, [add, fileListFromStorage])

  return (
    <div css={[relative, heightLayout('full')]}>
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
                  css={css`margin-left: auto;`}
                />
              </ListItem>
            )
          })
        }
      </FileList>
      <form
        css={[flex(), widthLayout('full'), horizontalGutter(6), absolute({ bottom: '0' })]}
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
          css={css`flex: 1;`}
        />
        <TextButton>ADD</TextButton>
      </form>
    </div>
  )
}

const FileList = styled.ol`
  padding: 6px 4px 0 0;
`
