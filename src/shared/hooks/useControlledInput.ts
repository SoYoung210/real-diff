import { ChangeEvent, ReactText, useState } from 'react'

import { useEventCallback } from './useEventCallback'

export const useControlledInput = (initialValue: ReactText) => {
  const [value, setValue] = useState(initialValue)
  const handleValueChange = useEventCallback<[ChangeEvent<HTMLInputElement>]>(({ target }) =>
    setValue(target.value),
  )

  return [value, setValue, handleValueChange] as const
}
