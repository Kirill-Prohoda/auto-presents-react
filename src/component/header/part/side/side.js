import { Link } from 'react-router-dom'
import './style/style.scss'


const HeaderSide = ({bool}) => {
    return (
        <ul className={`animated sidenav ${bool ? 'slideInLeft' : 'slideOutLeft'}`} id="mobile-demo">
            <li className="sidenav_el"><Link to='/'> home </Link></li>
            <li className="sidenav_el"><Link to='/about'> products </Link></li>
            <li className="sidenav_el"><Link to='/about'> about </Link></li>
        </ul>
    )

}
export default HeaderSide