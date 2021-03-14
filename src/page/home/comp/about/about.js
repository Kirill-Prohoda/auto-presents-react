import './style/style.scss'
import friend from './style/img/friend.jpg'
import { NavLink } from 'react-router-dom';

const HomeAbout = () => {

    return (
        <article className="home_about">

            <section className="about">

                <div className="about_photo">
                    <img src={friend} width="100%" height="100%" alt="us" />
                </div>
                <div className="about_desc desc">
                    <h1>about us</h1>
                    <div className="desc_text">
                        It is a long established fact that
                        a reader will be distracted by the
                        readable content of a page when
                        looking at its layout. The point of
                    </div>
                    <div className="desc_butt">
                        <NavLink to='/about' activeStyle={{ color: "#bea67c" }}> learn more </NavLink>
                    </div>
                </div>

            </section>

        </article>

    )
}
export default HomeAbout;