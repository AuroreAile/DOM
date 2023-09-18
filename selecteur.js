const liste = document.getElementsByTagName('li') // collection d'HTML élément
console.log(liste[2].innerText)// recupérer le texte : Model

const li = document.getElementById('objet')
console.log(li.innerText)//object

const li_s = document.getElementsByClassName('document')
console.log(li_s[1].innerHTML)

const li_s2 = document.getElementsByName('model')
console.log(li_s2[0].innerHTML) // tjs indiquer l'index

const object = document.querySelector("#objet") //récupère l'élément avec l'id object
console.log(objet)

const object2 = document.querySelector('li.document') //récupère l'élément avec la classe document
console.log(object2.innerText)

const object3 = document.querySelectorAll('ul li')
console.log(object3[0].innerText)

//chercher tous les éléments de type li dans un élément de type div
const element = document.querySelectorAll('div')
console.log(element)

    //chercher un élément enfant de div
    const element2 = document.querySelector('div').getElementsByTagName('li')
    console.log(element2)