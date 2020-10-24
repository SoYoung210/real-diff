import minimatch from 'minimatch'

/*
['package-lock.json', 'yarn.lock', '.gitignore']
*/
export const filterIgnoredFiles = (ignoredList: string[]) => (
  filename: string,
) => {
  const isMatched = !!ignoredList.find(pattern => {
    const [matched] = minimatch.match([filename], pattern, {matchBase: true})

    return !!matched
  })

  return isMatched
}
