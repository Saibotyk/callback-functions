let character1 = prompt('Quel est le nom du personnage 1 ?');
const lvl1 = 7;
const Point1 = 5;
const dfs1 = 8;

let character2 = prompt('Quel est le nom du personnage 2 ?');

const lvl2 = 8;
const Point2 = 6;
const dfs2 = 7;

let nca = prompt(`Qui lance l\'attaque, ${character1} ou ${character2} ?`);

let rslt1 = 0;
let rslt2 = 0;

if (nca == character1) {
  rslt1 = lvl1 +  Math.random() * Point1;
  rslt2 = lvl2 +  Math.random() * dfs2;
  if (rslt1 > rslt2) {
    alert(`${character1} a attaqué et a gagné !`); 
  } else {
    alert(`${character1} a attaqué et ${character2} a gagné !`);
  }
} else {
  rslt1 = lvl2 + Math.random() * Point2; 
  rslt2 = lvl1 + Math.random() * dfs1;
  if (rslt1 > rslt2) {
    alert(`${character2} a attaqué et a gagné !`); 
  } else {
    alert(`${character2} a attaqué et ${character1} a gagné !`);
  }
}
 





