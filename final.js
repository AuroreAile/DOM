const colorpicker = document.getElementById('colorpicker');
console.log (colorpicker);

const titre = document.getElementsByTagName('h1')
console.log(titre);

const nav = document.getElementsByTagName('nav');
console.log(nav)

const article = document.getElementsByClassName('contain-articles');
console.log(article);

const active = document.getElementsByClassName('active');
console.log(active);

const badge = document.getElementsByClassName('badge');
console.log(badge);

changeColor = (ev) => {
   const color = ev.target.value;
   console.log(color)
  for (let i=0; i<titre.length; i++) {
    titre[i].style.color = color;
  
}}

colorpicker.addEventListener('change', changeColor);