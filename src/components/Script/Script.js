import React from 'react'

function Script() {
    let checkbox = document.querySelector('input[type="checkbox"]');

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            document.querySelector('.App').style.background = "white";
            let p = document.querySelectorAll('.col-burger p');
            p.forEach((element, key) => {
                element.style.color = "black";
            });
            let a = document.querySelectorAll('section ul li a');
            a.forEach((element, key) => {
                element.style.color = "black";
            });
        } else {
            document.querySelector('.App').style.background = "black";
            let p = document.querySelectorAll('.col-burger p');
            p.forEach((element, key) => {
                element.style.color = "#dedede";
            });
            let a = document.querySelectorAll('section ul li a');
            a.forEach((element, key) => {
                element.style.color = "white";
            });
        }
    });
    return (
        <div>
            
        </div>
    )
}

export default Script
