export enum STORAGE_KEY {
  USER_INFO = '@@REAL_DIFF/USER_INFO',
}

const saveData = <T>(key: STORAGE_KEY, value: T) => (
  localStorage.setItem( key, JSON.stringify(value))
)

const getData = <T>(key: STORAGE_KEY): T => (
  JSON.parse(localStorage.getItem(key) as string)
)

const hasValue = (keys: STORAGE_KEY[] | STORAGE_KEY): boolean => {
  if (!Array.isArray(keys)) {
    return localStorage.hasOwnProperty(keys)
  }

  return keys.every(key => localStorage.hasOwnProperty(key))
}

export const localStorageUtil = {
  saveData,
  getData,
  hasValue,
}
