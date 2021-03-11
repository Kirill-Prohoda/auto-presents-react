
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../base/logo/logo.js'
import HeaderButt from './part/butt/butt.js'
import HeaderLang from './part/lang/lang.js'
import HeaderSide from './part/side/side.js'

import './style/style.scss'

const Header = () => {
    let [bool, setBool] = useState(false)


    return (
        <div className="header">

            <div className="header_button">
                <HeaderButt bool={bool} setBool={setBool} />
            </div>
            <div className="header_navbar" >
                <nav className="navbar">
                    <div className="navbar_logo">
                        <Logo />
                    </div>
                    <ul className="navbar_menu menu">
                        <li className="menu_el"><Link to='/about'> home </Link></li>
                        <li className="menu_el"><Link to='/about'> products </Link></li>
                        <li className="menu_el"><Link to='/about'> about </Link></li>
                    </ul>
                </nav>
            </div>

            <div className="header_lang">
                <HeaderLang />
            </div>

            <aside>
                <HeaderSide bool={bool} />
            </aside>
        </div>
    )

}

export default Header;