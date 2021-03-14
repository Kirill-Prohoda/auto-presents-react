import { useEffect, useState } from 'react'

import PreVideo from '../../component/fullscreen/prevideo/index'

import Head from './comp/head/head.js'
import Parts from './comp/parts/parts.js'
import Prev from './comp/prew/preview.js'
import About from './comp/about/about.js'

const HomeContainer = () => {

    // let [click, setClick] = useState(false)

    // // useEffect(() => {
    // //     click ? document.body.classList.add('body_noscroll')
    // //         : document.body.classList.remove('body_noscroll')
    // // }, [click])

    return (
        <>
            <Head />
            <Parts />
            <Prev/>
            <About />
        </>
    )
}

export default HomeContainer;