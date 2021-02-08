import { useCallback, useMemo } from 'react'

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

  const add = useCallback((fileName: string) => {
    settingStorage.setItem(STORAGE_KEY, [...fileListFromStorage, fileName])
  }, [fileListFromStorage, settingStorage])

  const remove = useCallback((fileName: string) => {
    settingStorage.setItem(STORAGE_KEY, fileListFromStorage.filter((existFileName) => {
      return existFileName !== fileName
    }))
  }, [fileListFromStorage, settingStorage])

  return { add, remove, fileListFromStorage }
}
