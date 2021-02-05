import React, { FormEvent } from 'react'

import { Button } from '@/shared/components//Button'
import { ContentWrapper } from '@/shared/components/ContentWrapper'
import { Input } from '@/shared/components/Input'
import { useControlledInput } from '@/shared/hooks/useControlledInput'
import useEventCallback from '@/shared/hooks/useEventCallback'
import { flex, horizontalGutter } from '@/shared/utils/styles'


export const FileListSettingView = () => {
  const [fileName, , handleFileNameChange] = useControlledInput('')
  // const handleFileNameSubmit = useEventCallback()

  return (
    <ContentWrapper offsetTopHeight={46}>
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
