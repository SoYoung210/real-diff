import styled from '@emotion/styled'
import React, { FormEvent } from 'react'

import { Button } from '@/shared/components//Button'
import { ContentWrapper } from '@/shared/components/ContentWrapper'
import { Input } from '@/shared/components/Input'
import { useControlledInput } from '@/shared/hooks/useControlledInput'
import { flex, horizontalGutter } from '@/shared/utils/styles'


export const FileListSettingView = () => {
  const [fileName, , handleFileNameChange] = useControlledInput('')
  // const handleFileNameSubmit = useEventCallback()

  return (
    <ContentWrapper offsetTopHeight={46}>
      <FileList css={flex()}>
        { /** shared/ListItem과 RemoveButton사용 */}
      </FileList>
      <form
        css={[flex(), horizontalGutter(6)]}
        onSubmit={(e: FormEvent) => {
          e.preventDefault()
        }}
      >
        <Input
          value={fileName}
          placeholder='Add ignore file name'
          onChange={handleFileNameChange}
        />
        <Button>ADD</Button>
      </form>
    </ContentWrapper>
  )
}

const FileList = styled.ol`
  padding: 6px 4px 0 0;
`
