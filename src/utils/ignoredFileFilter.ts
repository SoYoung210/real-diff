import minimatch from "minimatch"

const getLastItem = <T>(arr: T[]) => {
  return arr[arr.length - 1]
}

const getFileName = (fileNameWithPath: string) => {
  return getLastItem(fileNameWithPath.split('/'))
}
/*
['package-lock.json', 'yarn.lock', '.gitignore']
*/
export const filterIgnoredFiles = (ignoredList: string[]) => (
  filename: string,
) => {
  const isMatched = !!ignoredList.find(pattern => {
    const [matched] = minimatch.match([filename], pattern, {matchBase: true});
    return !!matched;
  })

  return isMatched;
}
