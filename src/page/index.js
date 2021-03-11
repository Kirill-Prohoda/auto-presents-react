import React from 'react'
import { useTransition, animated } from 'react-spring'

import { Switch, Route, useLocation } from 'react-router-dom'
import HomeContainer from './home'
import AboutContainer from './about'


const RouterPage = () => {
    const location = useLocation()

    const transitions = useTransition(location, location => location.pathname, {
        from: {
            opacity: 0,
            position: 'absolute',
            width: '100%',
            transform: `translate3d(100%, 0, 0)`,
            height: '100hv'
        },
        enter: {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
        },
        leave: {
            opacity: 0,
            transform: `translate3d(-50%, 0, 0)`
        }
    })



    return transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
            <Switch location={item}>
                <Route exact path='/' component={HomeContainer} />
                <Route path='/about' component={AboutContainer} />
            </Switch>
        </animated.div >
    ))
}

export default RouterPage;