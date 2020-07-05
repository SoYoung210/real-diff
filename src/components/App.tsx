import styled from '@emotion/styled'
import React, { useState } from 'react'

const Layout = styled.div`
  margin: 10px;
`
const Head = styled.h1`
  font-weight: 700;
  margin: 10px 0;
`
const TextInputField = styled.input``
// https://docs.github.com/en/rest/reference/pulls#list-pull-requests-files
export default () => {
  const [token, setToken] = useState('')

  return (
    <Layout>
      <Head>Add GitHub API Token</Head>
      <TextInputField
        value={token}
        onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
          setToken(target.value)
        }
      />
    </Layout>
  )
}
