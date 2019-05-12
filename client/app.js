import React from 'react'

import {Navigation} from './components'
import Routes from './routes'
import {InterviewBot} from './components/interviewBot'

const App = () => {
  return (
    <div id="app">
      <Navigation />
      <div className="container">
        <Routes />
        {/* <InterviewBot /> */}
      </div>
    </div>
  )
}

export default App
