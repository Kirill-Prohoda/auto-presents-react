import './style/style.scss'

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
                    <img width="100%" height="100%" src="https://ktm-versand.de/media/image/d8/9b/d7/pho_pphp_nmon_45212948344_power_reduction_kit__sall__awsg__v1.jpg" alt="pic" />
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
                    <img width="100%" height="100%" src="https://motoshinarus.ru/picture_products/279/1465933099_8749.jpeg" alt="pic" />
                </div>
            </section>

            <section className="equipment">
                <div className="equipment_desc">
                    <h2>equipment</h2>
                    <p>qasdfasdfasd</p>
                </div>
                <div className="equipment_video">
                    <div className="equipment_video_el">
                        <img width="100%" height="100%" src="https://universalmotors.ru/1200x1200/upload/galleries/shop/3/shop_items/main/5/5/9/item_559964/gallery_203346.jpeg" alt="pic" />
                        <p>qweqwe</p>
                    </div>
                    <div className="equipment_video_el">
                        <img width="100%" height="100%" src="https://universalmotors.ru/1200x1200/upload/galleries/shop/3/shop_items/main/5/5/9/item_559964/gallery_203346.jpeg" alt="pic" />
                        <p>qweqwe</p>
                    </div>
                    <div className="equipment_video_el">
                        <img width="100%" height="100%" src="https://universalmotors.ru/1200x1200/upload/galleries/shop/3/shop_items/main/5/5/9/item_559964/gallery_203346.jpeg" alt="pic" />
                        <p>qweqwe</p>
                    </div>
                </div>
            </section>
        </article>

    )
}

export default HomeParts;