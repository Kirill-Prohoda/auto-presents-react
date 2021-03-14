import React from 'react'
import { useTransition, animated } from 'react-spring'
import { Switch, Route, useLocation } from 'react-router-dom'

import HomeContainer from './page/home'
import AboutContainer from './page/about'

import './App.css';

function App() {

  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    from: {
      opacity: 0,
      width: '100%',
      position: 'absolute',
      transform: `translate3d(100%, 0, 0)`,
    },
    enter: {
      opacity: 1,
      position: 'relative',
      transform: 'translate3d(0, 0, 0)'
    },
    leave: {
      opacity: 0,
      position: 'absolute',
      transform: `translate3d(-50%, 0, 0)`
    }
  })



  return (
    <div className="App">
      {
        transitions.map(
          ({ item, props, key }) => (
            <animated.div key={key} style={props}>
              <Switch location={item}>
                <Route exact path='/' component={HomeContainer} />
                <Route path='/about' component={AboutContainer} />
              </Switch>
            </animated.div >
          )
        )
      }
    </div>
  );
}



export default App;
