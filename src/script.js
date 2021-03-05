let adding = (price) => {
  let value = document.querySelector('.result').innerHTML;
  value = value + '+' + price;
  value = eval(value);
  document.querySelector('.result').innerHTML = value;
}

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

let checkbox = document.querySelector('input[type="checkbox"]');

checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
    document.querySelector('body').style.background = "white";
    let p = document.querySelectorAll('.col-burger p');
    p.forEach((element, key) => {
      element.style.color = "black";
    });
    let a = document.querySelectorAll('section ul li a');
    a.forEach((element, key) => {
      element.style.color = "black";
    });
  } else {
    document.querySelector('body').style.background = "black";
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
