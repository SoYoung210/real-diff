import { filterIgnoredFiles } from '@/utils/ignoredFileFilter'

describe('filterIgnoredFiles Test', () => {
 it('file이름이 ignoredList에 포함된 경우 true를 반환' ,() => {
   // Given
   const ignoredList = ['mock1.tsx', 'mock2.json']
   // When
   const result = filterIgnoredFiles(ignoredList)('mock1.tsx')
   // Then
   expect(result).toBe(true)
 })

 it('file이름이 ignoredList에 subText로 포함된 경우 true를 반환' ,() => {
    // Given
    const ignoredList = ['mock1.tsx', 'mock2.json']
    // When
    const result = filterIgnoredFiles(ignoredList)('src/mock1.tsx')
    // Then
    expect(result).toBe(true)
  })

  it('file이름이 ignoredList에 포함되지 않은 경우 false를 반환' ,() => {
    // Given
    const ignoredList = ['mock1.tsx', 'mock2.json']
    // When
    const result = filterIgnoredFiles(ignoredList)('mock1.js')
    // Then
    expect(result).toBe(false)
  })
})
