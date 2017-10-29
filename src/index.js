/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'

import App from './app'
import registerServiceWorker from './registerServiceWorker'

import './index.css'

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()