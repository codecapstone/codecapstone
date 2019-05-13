import React from 'react'

import {Navigation} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div id="app">
      <Navigation />
      <div className="container">
        <Routes />
      </div>
    </div>
  )
}

export default App
