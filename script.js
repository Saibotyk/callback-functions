const n = 629;
const s = 857;
const t = 483;
const l = 567;



let min = 1000;
let max = 0;
let ave;
let winner;
// min
if (n < min) {
    min = n;
}
if (s < min) {
    min = s;
}
if (t < min) {
    min = t;
}
if (l < min) {
    min = l;
}
// max
if (n > max){
    max = n;
    winner = "Nicolas";
}
if (s > max){
    max = s;
    winner = "Samir";
}
if (t > max){
    max = t;
    winner = "Tom";
}
if (l > max){
    max = l;
    winner = "Loanne";
}

ave = (n + s + t + l) / 4;

console.log("Le score minimal est " + min);

console.log("Average = " + ave );

console.log("Le score maximal est " + max);

console.log("Le gagnant est " + winner)

