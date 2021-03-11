import {  NavLink } from 'react-router-dom'
import './style/style.scss'


const HeaderSide = ({ bool }) => {
    return (
        <div className={`animated sidenav ${bool ? 'slideInLeft' : 'slideOutLeft'}`}>
            <ul className="sidenav_menu" >
                <li className="sidenav_menu_el"><NavLink exact activeStyle={{color: "#bea67c" }} to='/'> home </NavLink></li>
                <li className="sidenav_menu_el"><NavLink activeStyle={{color: "#bea67c" }} to='/about'> products </NavLink></li>
                <li className="sidenav_menu_el"><NavLink activeStyle={{color: "#bea67c" }} to='/about'> about </NavLink></li>
            </ul>
        </div>
    )

}
export default HeaderSide