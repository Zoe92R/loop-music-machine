import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
// import { HashRouter as Route} from 'react-router-dom'
import { routes } from './routes.js'
import { AppFooter } from './cmps/AppFooter.jsx'

export const App = () => {
  return (
    <React.Fragment>
      {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
      <AppFooter />
    </React.Fragment>
  )

}






