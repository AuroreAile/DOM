const contenu = document.getElementById('contenu');
let titre = document.createElement('h3');
contenu.prepend(titre = 'Titre de la page');

let items = document.querySelectorAll('li');
    console.log(items);
    for (let element of items) {
        console.log(element);
        element.remove()
    }




