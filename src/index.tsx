import styled from '@emotion/styled'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route,Switch } from 'react-router-dom'

import App from '@/components/App'
import store, { rootSaga,sagaMiddleware } from '@/features'

import { MainView } from './components/main'
import { SettingsView } from './components/settings/index'

sagaMiddleware.run(rootSaga)

const Layout = styled.div`
  margin: 10px;
  width: 280px;
`

ReactDOM.render(
  <Provider store={store}>
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path='/settings' component={SettingsView} />
          <Route path='/' component={MainView} />
        </Switch>
        {/* <App /> */}
      </BrowserRouter>
    </Layout>
  </Provider>,
  document.getElementById('root'),
)
