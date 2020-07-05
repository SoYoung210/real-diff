import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Layout = styled.div`
  margin: 10px;
  width: 280px;
`
const Head = styled.h1`
  font-weight: 700;
  margin: 10px 0;
`
const TextInputField = styled.input`
  display: block;
  width: 100%;
`
const SaveButton = styled.button`
  padding: 8px 0px;
  margin-top: 10px;
  width: 100%;
  background: rgba(24,205,140,0.1);
  border-radius: 8px;
  color: #18CD8C;
  font-weight: bold;
  font-size: 14px;
`
// https://docs.github.com/en/rest/reference/pulls#list-pull-requests-files
export default () => {
  const dispatch = useDispatch()
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
      <SaveButton>Save</SaveButton>
    </Layout>
  )
}
