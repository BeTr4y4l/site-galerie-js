// Écoute l'intersection des items avec un seuil de 0.5 et ajoute ou enlève la classe visble 
const observer = new IntersectionObserver((entries, target) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting === true) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    })
}, {
    threshold: 0.5
});

// selectionne l'intégralité des items dans une nodeList
const nodeItems = document.querySelectorAll('.item');

// stock la nodelist dans un array
const itemsArray = [];
for (let i = nodeItems.length; i--; itemsArray.unshift(nodeItems[i]));


//  observe l'intégralité des index de l'array contenant les items
itemsArray.forEach(index =>
    observer.observe(index)
);

const headTitle = document.querySelector('.title');

observer.observe(headTitle);