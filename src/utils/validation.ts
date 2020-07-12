export const isMatchedPattern = (regex: RegExp, value: string) => (
  regex.test(value)
)
