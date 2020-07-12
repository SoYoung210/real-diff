import React from 'react'

import { FetchStatusCode } from '@/api'

interface Props {
  fetchState: FetchStatusCode;
  children: React.ReactNode
}

export const FetchStateWrapper = ({ fetchState, children }: Props) => {
  if (fetchState === FetchStatusCode.LOADING) {
    return <div>Loading</div>
  }
  // TODO: Error View
  // if (fetchState === FetchStatusCode) {
  //   return <div>Error!@!!@</div>
  // }

  return (
    <>
      { children }
    </>
  )
}
