// Pour chaque question, implémentez la fonction demandée.
// Pour chaque fonction, faire au moins 2 appels de la fonction avec des paramètres différents et afficher les résultats dans la console.

/* ------------------------------------------------------*/

console.info("1/ Implémentez une fonction qui retourne la somme de ses 2 paramètres.");
function getSum(a, b) {
    return a + b;
}
console.log(getSum(25, 25));
console.log(getSum(50, 50));

/* ------------------------------------------------------*/

console.info("2/ Implémentez une fonction qui prend en paramètre les dimensions de 2 côtés d'un triangle rectangle et retourne la dimension de l'hypoténuse.");
// Vous aurez besoin de certaines méthodes de l'objet Math :
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math
function getHypotenuse(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}
console.log(getHypotenuse(3, 4));
console.log(getHypotenuse(5, 15));

/* ------------------------------------------------------*/

console.info("3/ Implémentez une fonction qui retourne le nom et le prénom du plus âgé de 2 utilisateurs passés en paramètres parmi les 4 ci-dessous.");

const user1 = { firstName: "Paul", lastName: "Rick", age: 35 };
const user2 = { firstName: "Samir", lastName: "Ah", age: 22 };
const user3 = { firstName: "Loanne", lastName: "Bourdin", age: 28 };
const user4 = { firstName: "Abdel", lastName: "Dems", age: 44 };

function getOldest(u1, u2) {
    return u1.age < u2.age ? `${u2.firstName} ${u2.lastName}` : `${u1.firstName} ${u1.lastName}`;
}

console.log(getOldest(user1, user2));
console.log(getOldest(user3, user4));

/* ------------------------------------------------------*/

console.info("4/ Implémentez une fonction qui retourne la valeur la plus grande d'un tableau (array) de nombres, quelqu'en soit la taille.");
let array1 = [123, 1235, 45687, 1000000, 1, 2, 3]
let array2 = [1, 2, 3, 4, 5, 6, 10, 8, 9, 7]

function getMaxFromArray(array) {
    return Math.max(...array);
}
console.log(getMaxFromArray(array1));
console.log(getMaxFromArray(array2));

/* ------------------------------------------------------*/

console.info("5/ Implémentez une fonction qui prend en paramètre un texte et retourne un objet comptant le nombre d'occurence de chaque mot.");
// Vous aurez besoin de certaines méthodes de manipuation des chaînes de caractères :
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String#m%C3%A9thodes_des_instances
function getOccurence(text) {
    const object = {};
    const textConverted = text.replace(/(\w+),/g, "$1").toLowerCase();
    const array = textConverted.split(' ');
    for (const word of array) {
        if (object[word] === undefined) {
            object[word] = 0;
        }
        object[word]++;
    }
    return object;
}
console.log(getOccurence("Salut c'est cool, cool ici salut"));
console.log(getOccurence("Bonjour bonjour belle hirondelle de printemps"));

/* ------------------------------------------------------*/

console.info("6/ Implémentez une fonction qui retourne aléatoirement une valeur contenue dans un tableau (array) quelqu'en soit la taille.");
function getRandomValueInArray(array) {
    random = Math.floor(Math.random() * array.length);
    return array[random]
}
console.log(getRandomValueInArray(array1));
console.log(getRandomValueInArray(array2));

/* ------------------------------------------------------*/

console.info("7/ Implémentez une fonction qui retourne une valeur entière alétoire comprise entre 2 valeurs passées en paramètres.");

function getTwoRandom(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

console.log(getTwoRandom(5, 10));
console.log(getTwoRandom(10, 20));

/* ------------------------------------------------------*/

console.info("Pour les questions suivantes enrichissez l'objet 'newbie' ci-dessous.");

const newbie = {
    firstName: "Paul",
    lastName: "Bismuth",
    birthdate: "1995-02-14",
    job: "web developer",
    city: "Detroit",
    skills: ["HTML", "CSS"]
};

/* ------------------------------------------------------*/

console.info("8/ Implémentez une méthode retournant l'âge de Paul.");
newbie.getAge = function() {
    let age;
    const birthdate = new Date(this.birthdate);
    if (birthdate instanceof Date && !isNaN(birthdate)) {
       return age = (new Date(Date.now() - birthdate)).getFullYear() - 1970;
    } else {
        return "Birthdate is invalid"
    }
}

// console.table(newbie)
console.log(newbie.getAge());

/* ------------------------------------------------------*/

console.info("9/ Implémentez une méthode retournant un texte listant les compétences de Paul séparées par des virgules.");
newbie.getSkills = function (){
    const skills = this.skills.join(", ");
    return `Mes compétences sont : ${skills})`
}
console.log(newbie.getSkills());

/* ------------------------------------------------------*/

console.info("10/ Implémentez une méthode qui ajoute à Paul une compétence passée en paramètre.");
console.info("Ajoutez la compétence Javascript et utilisez la méthode précédente pour vous assurer du résultat.");
newbie.addSkill = function (skill) {
    this.skills.push(skill)
}
newbie.addSkill('Javascript')
console.log(newbie.getSkills());

/* ------------------------------------------------------*/

console.info("11/ Implémentez une méthode qui fait parler Paul pour qu'il se présente avec toutes ses caractéristiques. (Nom, prénom, âge, où il vit, son métier, ...)");
newbie.getpresentation = function () {
   return `Bonjour, Je m'appelle ${this.firstName} ${this.lastName}, j'ai actuellement ${this.getAge()} ans, je vis à ${this.city} et je suis ${this.job}. ${this.getSkills()} `
}
console.log(newbie.getpresentation());