import { useCallback, useMemo, useState } from 'react'

import { getStorage } from '@/shared/utils/storage'

const STORAGE_KEY = '@@real_diff__file_list'

export const useFileListStorage = () => {
  const settingStorage = getStorage({
    namespace: 'SETTING',
    storage: localStorage,
  })
  const fileListFromStorage = useMemo(() =>
    settingStorage.getItem<string[]>(STORAGE_KEY, []) ?? [],
    [settingStorage],
  )
  const [fileList, setFileList] = useState(fileListFromStorage)

  const add = useCallback((fileName: string | string[]) => {
    const newItem =
      Array.isArray(fileName) ? [...fileListFromStorage, ...fileName] : [...fileListFromStorage, fileName]
    settingStorage.setItem(STORAGE_KEY, newItem)

    setFileList(newItem)
  }, [fileListFromStorage, settingStorage])

  const remove = useCallback((fileName: string) => {
    const newItem = fileListFromStorage.filter((existFileName) => {
      return existFileName !== fileName
    })

    settingStorage.setItem(STORAGE_KEY, newItem)
    setFileList(newItem)
  }, [fileListFromStorage, settingStorage])

  return { add, remove, fileListFromStorage: fileList }
}
