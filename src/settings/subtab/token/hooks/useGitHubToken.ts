import { useCallback, useMemo } from 'react'

import { getStorage } from '@/shared/utils/storage'

const STORAGE_KEY = '@@real_diff__token'

// main page에서도 사용해야하고, 여러 도메인에서 사용될 레벨로 봐야할듯.
// 파일리스트도..
export const useGitHubToken = () => {
  const settingStorage = getStorage({
    namespace: 'SETTING',
    storage: localStorage,
  })

  const tokenFromStorage = useMemo(() => {
    return settingStorage.getItem<string>(STORAGE_KEY, '')
  }, [settingStorage])

  const update = useCallback((token: string) => {
    settingStorage.setItem(STORAGE_KEY, token)
  }, [settingStorage])

  return {
    update,
    isExist: tokenFromStorage !== '',
  }
}
