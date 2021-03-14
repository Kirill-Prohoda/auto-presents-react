import { useState } from 'react'
import Footer from '../component/footer'
import PreVideo from '../component/fullscreen/prevideo'
import Header from '../component/header'



import './default.scss'

const DefaultLayout = ({ children }) => {

    let [bool, setBool] = useState(false)

    let changeBool = () =>{
        bool && setBool(!bool)
    }


    return (
        <>
            <header>
                <Header bool={bool} setBool={setBool} />
            </header>
            <main onClick={changeBool}>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
            <PreVideo />

        </>
    )
}

export default DefaultLayout;