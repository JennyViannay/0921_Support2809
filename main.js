function displayUl(array, list) {
    if (typeof(array) === 'object') {
        for (let i = 0; i < array.length; i++) {
            // pour chacun des elem je crée sa <li> 
            const li = document.createElement('li')
            // dans sa li j'ajoute la valeur de l'elem 
            li.innerHTML = array[i]
            // J'ajoute li à ul
            list.appendChild(li)
            //console.log(li)
        }
    } else {
        return "error";
    }
}

const fruits = ["🍇", "🍈", "🍉", "🍋", "🍍"];
const ul = document.getElementById('list');
displayUl(fruits, ul)

const students = [
    "Aphideth",
    "Aurélien",
    "Kelly",
    "Fatima",
    "Kevin B",
    "Thomas",
    "Julien",
    "Esteban",
    "Gio",
    "Kevin R",
    "Mathilde",
    "Vincent",
    "Nicolas B",
    "Nicolas L",
    "Océane",
    "Yosr",
];
const ulStudent = document.getElementById('list-student')

displayUl(students, ulStudent)
console.log(displayUl("plop", ulStudent))

function getResult(a, b) {
    return 180 - (a + b);
}

console.log(getResult(52, 12))
