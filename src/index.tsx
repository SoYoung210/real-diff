import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from '@/components/App'
import store, { rootSaga,sagaMiddleware } from '@/features'

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
