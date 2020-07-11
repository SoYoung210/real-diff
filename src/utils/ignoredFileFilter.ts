export const filterIgnoredFiles = (ignoredList: string[]) => (
  filename: string,
) => {
  return ignoredList.some(ignoredFile => (
    ignoredFile.includes(filename)
  ))
}
