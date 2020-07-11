export enum STORAGE_KEY {
  GITHUB_TOKEN = '@@REAL_DIFF/GITHUB_TOKEN',
}

const saveData = <T>(key: STORAGE_KEY, value: T) => (
  // localStorage.setItem(key, JSON.stringify(value))
  chrome.storage.sync.set({[key]: value}, function () {
    console.log('🚀 Token Saved!')
  })
)
// FIXME: type
const getData = <T>(key: STORAGE_KEY): any => {
  const rawData = window.localStorage.getItem(key)

  chrome.storage.sync.get(key, function (items) {
    console.log('@@ items',items)

    return items
  })
  // if (!rawData) {
  //   return undefined
  // }

  // return JSON.parse(rawData)
}

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
