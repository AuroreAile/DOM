const text = document.getElementById('email');
for (let attribute of text.getAttributeNames()) {
    console.log(attribute); 
}//type i

const attributId = document.getElementById('email');
console.log(attributId.getAttribute('id'));

//if (checkbox.hasAttribute('checked')) {
       // checkbox.removeAttribute('checked');
//}

let formulaire = document.querySelector('form');
for (let element of formulaire) {
    if (element.hasAttributes()) {
        console.log(`Pas d'attribut : ${element}`)
}}