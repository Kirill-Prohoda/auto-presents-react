import './style/style.scss'
const HeaderButt = ({bool, setBool}) => {
   
    return (
        <div className="butt animated" onClick={() => setBool(!bool)} >
            <div className="img">
                <svg className={`img_menu animated ${!bool ? "rotateIn" : "rotateOut"}`} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>
                <svg className={`img_close animated ${!bool ? "rotateOut" : "rotateIn"}`} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
            </div>
            <div>
                <p>menu</p>
            </div>
        </div>
    )

}
export default HeaderButt;