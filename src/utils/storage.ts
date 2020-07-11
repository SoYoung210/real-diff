export enum STORAGE_KEY {
  GITHUB_TOKEN = '@@REAL_DIFF/GITHUB_TOKEN',
}

const saveData = <T>(key: STORAGE_KEY, value: T) => new Promise<void>((resolve, _) => {
  chrome.storage.sync.set({[key]: value}, function () {
    resolve(console.log('🚀 Token Saved!'))
  })
})
// FIXME: type
const getData = <T>(key: STORAGE_KEY): any => new Promise<any>((resolve, _) => {
  chrome.storage.sync.get(key, function (items) {
    console.log('@@ items',items)

    return resolve(items)
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