
import './style.scss'


// let style = (x) => ({
//     display: !x ? 'none' : 'block'
// });



let PreVideo = (props) => {

    let hidd = () => {
        document.getElementById('modal__video').classList.toggle('disable')
        document.body.classList.toggle('body_noscroll')
    }




    return (
        <div className="pre_video disable" id="modal__video">
            <button className="pre_video__button" onClick={hidd}>
                <svg xmlns="http://www.w3.org/2000/svg"
                    height="50"
                    viewBox="0 0 24 24"
                    width="50">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
            </button>
            <iframe
                className="pre_video__iframe"
               
                
                src="https://www.youtube.com/embed/1tUB7ItoYx4"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="My usless"
            ></iframe>

        </div>

    )


}

export default PreVideo;