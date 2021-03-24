import React from 'react'

function ColBurger(props) {
    return (
        <div className="col-burger" data-aos="flip-right" data-aos-offset="-100" data-aos-delay="50"
            data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-mirror="true"
            data-aos-once="false" data-aos-anchor-placement="top-center">

            <div className="section_img">
                <img src={props.img} alt="" />
                <div className="price">14500</div>
                <button onClick={props.Added}>Добавить в корзину</button>
            </div>
            <h2>С говядиной</h2>
            <p>Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета,
                            сдобренная майонезом и кетчупом</p>

        </div>
    )
}

export default ColBurger
