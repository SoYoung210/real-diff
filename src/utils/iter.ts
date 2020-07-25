export const isEmpty = (iter: any[] | Record<string, any>) => (
  Object.keys(iter).length === 0
)
