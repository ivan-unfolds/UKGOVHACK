import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App.js'
import Home from './components/Home/index.js'
import NewAnswer from './components/NewAnswer/index.js'
import AnswerPage from './components/AnswerPage/index.js'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/newAnswer' component={NewAnswer} />
    <Route path='answer/:answerID' component={AnswerPage} />
  </Route>
)
