import styled from '@emotion/styled'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route,Router,Switch } from 'react-router-dom'

import { HomeView } from '@/components/home'
import { MainView } from '@/components/main'
import { SettingsView } from '@/components/settings/index'
import store, { rootSaga,sagaMiddleware } from '@/features'
import { history} from '@/utils/history'

sagaMiddleware.run(rootSaga)

const Layout = styled.div`
  margin: 10px;
  width: 280px;
`

ReactDOM.render(
  <Provider store={store}>
    <Layout>
      <Router history={history}>
        <Switch>
          <Route path='/settings' component={SettingsView} />
          <Route path='/main' component={MainView} />
          <Route path='/' component={HomeView} />
        </Switch>
      </Router>
    </Layout>
  </Provider>,
  document.getElementById('root'),
)
