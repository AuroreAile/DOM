const lastname = document.getElementById('lastname');

for (let attribute of lastname.attributes) {//liste des attributs de notre élément
    console.log(attribute.textContent); //text lastname prenom
    console.log(attribute.name); //nom de l'attribut
}

const attributeName = lastname.getAttribute('name');
console.log(attributeName); //nom de l'attribut prenom

for (let attribute of lastname.getAttributeNames()) {
    console.log(attribute); //type id name
}

console.log(lastname.getAttributeNode('id'));

const elements = document.getElementsByTagName('li');

for (let element of elements) {
    if (element.hasAttribute('class')) {
        console.log(element.innerText);
}} //liste des éléments qui ont un attribut class

const checkbox = document.getElementById('box');
//checkbox.setAttribute('checked', 'checked'); //ajout d'un attribut checked cocher par défaut
//checkbox.removeAttribute('checked'); //suppression d'un attribut checked