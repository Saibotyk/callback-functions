// ------------------------
console.log("1/ Donne la somme de 2 valeurs.");
function totalAB(a, b){
    return a + b;
}
console.log(totalAB(5, 10));
console.log(totalAB(25, 88));

// ------------------------
console.log("2/ Donne la plus petite des 2 valeurs.");
function minAB(a, b){
    return a < b ? a : b;
}
console.log(minAB(5, 8));
console.log(minAB(9, 1));

// ------------------------
console.log("3/ Donne la dernière valeur d'un tableau.");
let array = ["a", "b", "c"]
let array2 = [1, 2, 3]
function lastEntry(array){
  return array.pop();
}

console.log(lastEntry(array));
console.log(lastEntry(array2));

// ------------------------
console.log("4/ Donne la valeur en entrée augmentée d'un pourcentage d'augmentation.");
function percentPlus(a, perc){
    return a * (1 + perc / 100);
}
console.log(percentPlus(50, 50));
console.log(percentPlus(50, 100));

// ------------------------
console.log("5/ Donne la valeur maximale entre 3 valeurs.");
function max(a, b, c){
    return Math.max(a, b, c)
}
console.log(max(12, 125, 6));
console.log(max(126, 15, 68));

// ------------------------
console.log("6/ Donne la somme des valeurs d'un tableau.");
let array3 = [10, 20, 30, 10];
let array4 = [10, 30, 30, 10, 5, 5];

function arrayTotal(array){
    let total = 0;
    for (const number of array) {
        total += number;
    }
    return total;
}

console.log(arrayTotal(array3));
console.log(arrayTotal(array4));

// ------------------------
console.log("7/ Donne une valeur aléatoire entre 0 et un nombre.");
function randomize(a){
   return Math.round(Math.random() * a);
}
console.log(randomize(10));
console.log(randomize(50));

// ------------------------
console.log("8/ Donne la moyenne des valeurs d'un tableau.");
function arrayAverage(array){
    let total = 0;
    for (const number of array) {
        total = number + total;
    }
    return total / array.length;
}
console.log(arrayAverage(array3));
console.log(arrayAverage(array4));

// ------------------------
console.log("9/ Donne une durée en heures et minutes depuis une durée en minutes.");
function convHrMn(mn){
    let totalHr = Math.floor(mn / 60);
    let totalMn = Math.ceil(mn % 60);
    return `${totalHr} heures et ${totalMn} minutes`
}
console.log(convHrMn(90));
console.log(convHrMn(120));

// ------------------------
console.log("10/ Donne la valeur minimale d'un tableau.");
function getMin(array){
    let min = 1000;
    for (const value of array) {
        if (value < min ) {
           return min = value;
        }
    }
  }
console.log(getMin(array3));
console.log(getMin(array2));

// ------------------------
console.log("11/ Donne la clé d'un objet pour la valeur maximale .");
let object1 = {a: 1, b: 2, c: 3}
let object2 = {a: 3, b: 2, c: 1}
function getObjectMax(object) {
    let max = 0;
    let maxKey;
    for (const key in object){
        if (object[key] > max) {
            max = object[key];
            maxKey = key;
        }
    }
    return maxKey;
}
console.log(getObjectMax(object1));
console.log(getObjectMax(object2));

// ------------------------
console.log("12/ Donne une valeur aléatoire dans un tableau.");
let arrayRandom1 = [1, 2, 3, 4];
let arrayRandom2 = [10, 20, 30, 40];
function getRandomValueInArray(array) {
    random = Math.floor(Math.random() * array.length);
    return array[random]
}
console.table(getRandomValueInArray(arrayRandom1));
console.table(getRandomValueInArray(arrayRandom2));

// ------------------------
console.log("13/ Donne le nombre de mot dans un texte.");
let texte = "Bonjour je posséde cinq mots";
let texte2 = "Bonjour je posséde dix mots et ça me vas bien";

function getWordsNb(text) {
    const words = text.split(" ");
    return `Dans la phrase (${text}) il y a ${words.length} mots !`;
}
console.log(getWordsNb(texte));
console.log(getWordsNb(texte2));