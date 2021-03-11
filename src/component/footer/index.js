import Logo from '../base/logo/logo'
import './style/style.scss'
const Footer = () => {

    return (
        <div className="footer">
            <div className="year">
                &#169; 2021 wooder
            </div>
            <div className="logo">
                <Logo />
            </div>
            <div className="">
                author
            </div>
        </div>
    )

}

export default Footer;