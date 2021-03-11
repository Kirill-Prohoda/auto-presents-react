import './style/style.scss'

const HomeHead = () => {

    return (
        <section className="home_head">
            <div className="home_back">
                <div className="home_title">
                    <h1>wooder</h1>
                    <div className="home_butt">learn more &#8594;</div>
                    <div className="home_anim animated pulse infinite slower">

                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none" /><path d="M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z" /></svg><br></br>

                        <p>&#8595;</p>

                    </div>
                </div>
            </div>
        </section>
    )

}
export default HomeHead;