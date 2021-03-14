import './style/style.scss'
import pic from './style/img/moto-pic.jpg'

let styleFon = {
    background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),
                url(${pic}) no-repeat center center`
}

const Head = () => {

    return (
        <article className="home_head" style={styleFon}>


            <div className="home_title">
                <h1>wooder</h1>
                <p><a href="/">learn more &#8594;</a></p>
                <div className="home_anim animated pulse infinite slower">
                    <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="25">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
                        <rect fill="none" height="24" width="24" />
                        <path d="M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z" />
                    </svg>
                </div>
            </div>



        </article>
    )
}
export default Head;