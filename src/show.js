import React from 'react'

function show() {
    var i = 0;
    let show = () => {

        if (i % 2 == 0) {
            document.querySelector('.menu2').style.display = "flex";
            document.querySelector('header').style.transform = "translateX(-150px)";
            document.querySelector('.knopka').style.transform = "rotate(180deg)";
            i++;
        }
        else {
            document.querySelector('.menu2').style.display = "none";
            document.querySelector('header').style.transform = "translateX(0px)";
            document.querySelector('.knopka').style.transform = "rotate(0deg)";
            i++;
        }

    }
    return (
        <div>

        </div>
    )
}

export default show
