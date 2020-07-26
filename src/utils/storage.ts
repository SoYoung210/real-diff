export enum STORAGE_KEY {
  GITHUB_TOKEN = '@@REAL_DIFF/GITHUB_TOKEN',
  IGNORE_FILE_LIST = '@@REAL_DIFF/IGNORE_FILE_LIST',
}

const saveData = <T>(key: STORAGE_KEY, value: T) => new Promise<void>((resolve) => {
  chrome.storage.sync.set({[key]: value}, function () {
    return resolve(console.log('🚀 Storage Updated!'))
  })
})

const getData = <T>(key: STORAGE_KEY): Promise<T> => new Promise<T>((resolve) => {
  chrome.storage.sync.get(key, function (items) {

    return resolve(items[key])
  })
})

const hasValue = (keys: STORAGE_KEY[] | STORAGE_KEY): boolean => {
  if (!Array.isArray(keys)) {
    return localStorage.hasOwnProperty(keys)
  }

  return keys.every(key => localStorage.hasOwnProperty(key))
}

export const storageUtil = {
  saveData,
  getData,
  hasValue,
}
