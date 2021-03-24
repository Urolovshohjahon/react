import React from 'react'

function HeaderMain(props) {
    return (
        <div className="header_main">
            <div className="container">
                <div className="row flex-column">

                    <h1>Большой гамбургер</h1>


                    <p className="p1">говядина</p>


                    <p className="p2">Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая
                    котлета,
                    сдобренная майонезом и кетчупом, - таков классический портрет гамбургера, наиболее
                    распространенной «быстрой» еды в США, от отравления которой ежедневно на больничных койках
                        оказываются десятки тысяч американцев</p>


                    <div className="price result" >{props.price}$</div>

                </div>
            </div>
        </div>
    )
}

export default HeaderMain
