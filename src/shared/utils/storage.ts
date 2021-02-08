export const NAMESPACES = {
  SETTING: 'setting',
}

type NameSpaceType = keyof typeof NAMESPACES

interface Params {
  storage: Storage,
  namespace: NameSpaceType
}

const getStorageKey = (namespace: NameSpaceType) => (key: string) => {
  return `${namespace}.${key}`
}

export const getStorage = ({
  storage,
  namespace,
}: Params) => {
  const storageKey = getStorageKey(namespace)

  return {
    setItem: (key: string, value: unknown) => {
      try {
        storage.setItem(storageKey(key), JSON.stringify(value))
      } catch {
        throw Error('storage 저장 중에 에러가 발생했습니다.')
      }
    },
    getItem: <Data>(key: string, defaultValue: Data): Data | undefined => {
      try {
        return parseJSON<Data>(localStorage.getItem(storageKey(key)))
      } catch {
        return defaultValue
      }
    },
  }
}

/**
 * https://github.com/astoilkov/use-local-storage-state/blob/b2e204c098e13c4db29ca0639006b9eea8a098d0/src/storage.ts
 * A wrapper for `JSON.parse()` which supports the return value of `JSON.stringify(undefined)`
 * which returns the string `"undefined"` and this method returns the value `undefined`.
 */
function parseJSON<T>(value: string | null): T | undefined {
  return value === 'undefined'
    ? undefined
    : // JSON.parse() doesn't accept non-string values, this is why we pass empty
    // string which will throw an error which can be handled
    JSON.parse(value ?? '')
}
