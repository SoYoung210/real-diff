import React, { ReactNode } from 'react'

export type BooleanLike = boolean | string | number | null | undefined;

interface Params {
  condition: BooleanLike
  trueComponent: ReactNode
  falseComponent: ReactNode
}

export const Ternary = ({ condition, trueComponent, falseComponent }: Params) => {
  return (
    <>
      {Boolean(condition) ? trueComponent : falseComponent}
    </>
  )
}
