import './style/style.scss'

import parts from './style/img/parts.jpg'
import tires from './style/img/tires.jpg'
import eqypir from './style/img/eqypir.jpg'

const HomeParts = () => {

    return (

        <article className="home_parts">

            <section className="parts">

                <div className="parts_desc">
                    <h2>Parts</h2>
                    <p>
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less
                    </p>
                </div>

                <div className="parts_photo">
                    <img width="100%" height="100%" src={parts} alt="pic" />
                </div>

            </section>



            <section className="tires">

                <div className="tires_desc">
                    <h2>Tires</h2>
                    <p>
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less
                    </p>
                </div>

                <div className="tires_photo">
                    <img width="100%" height="100%" src={tires} alt="pic" />                </div>

            </section>



            <section className="equipment">

                <div className="equipment_desc">
                    <h2>equipment</h2>
                    <p>qasdfasdfasd</p>
                </div>

                <div className="equipment_video">
                    <div className="equipment_video_el">
                        <img width="100%" height="100%" src={eqypir} alt="pic" />                        <p>qweqwe</p>
                    </div>
                    <div className="equipment_video_el">
                        <img width="100%" height="100%" src={eqypir} alt="pic" />                        <p>qweqwe</p>
                    </div>
                    <div className="equipment_video_el">
                        <img width="100%" height="100%" src={eqypir} alt="pic" />                        <p>qweqwe</p>
                    </div>
                </div>

            </section>

        </article>
    )
}

export default HomeParts;