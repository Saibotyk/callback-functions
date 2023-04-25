const scores = [
    {
        Nicolas: 629,
        Samir: 857,
        Tom: 483,
        Loanne: 567
    },
    {
        Nicolas: 234,
        Samir: 647,
        Tom: 737,
        Loanne: 235
    },
    {
        Nicolas: 962,
        Samir: 346,
        Tom: 346,
        Loanne: 865
    },
    {
        Nicolas: 317,
        Samir: 347,
        Tom: 853,
        Loanne: 734
    }
];


console.info("Les scores de la deuxiÃ¨me partie");

console.log(Object.values(scores[1]));

/* ------------------------- */

console.info("La liste des prÃ©noms des joueurs de la premiÃ¨re partie");

console.log(Object.keys(scores[0]));

/* ------------------------- */

console.info("Le nombre de parties");

console.log(scores.length);

/* ------------------------- */

console.info("Le score de Tom pour la premiÃ¨re partie");

console.log(scores[0].Tom);

/* ------------------------- */

console.info("Le score de Loanne pour la troisiÃ¨me partie");

console.log(scores[2].Loanne);

/* ------------------------- */

console.info("La somme des scores de la deuxiÃ¨me partie");
let total = 0;

for (const name in scores[1]) {
    total += scores[1][name];
}

console.log(total);

/* ------------------------- */

console.info("Le gagnant de la premiÃ¨re partie");
let maxScore = 0;
let winner;

for (const name in scores[0]) {
    maxScore = Math.max(maxScore, scores[0][name]);
    if (maxScore == scores[0][name]) {
        winner = name;
    }
}
console.log(winner)

// Autre Maniere 
let scoreMax = 0;
let winnerN;

for (const name in scores[0]) {
    if (scores[0][name] > scoreMax) {
        scoreMax = scores[0][name];
        winnerN = name;
    }
}

console.log(winnerN)

/* ------------------------- */

console.info("Le perdant de la derniÃ¨re partie");
let minScore = Number.MAX_VALUE;
let looser;

for (const name in scores[3]) {
    minScore = Math.min(minScore, scores[3][name]);
    if (minScore == scores[3][name]) {
        looser = name;
    }
}
console.log(looser);

/* ------------------------- */

console.info("Le meilleur score de Samir sur toutes les parties");
let bestScore = 0;

for (const gameNb in scores) {
    bestScore = Math.max(bestScore, scores[gameNb].Samir)
}

console.log(bestScore);

/* ------------------------- */

console.info("Le pire score de Loanne sur toutes les parties");
let worstScore = Number.MAX_VALUE;

for (const gameNb in scores) {
    worstScore = Math.min(worstScore, scores[gameNb].Loanne)
}
console.log(worstScore);


/* ------------------------- */
/* ------------------------- */


const characters = {
    Godzilla: {
        life: 40,
        xp: 5,
        weapon: 9
    },
    Kong: {
        life: 40,
        xp: 7,
        weapon: 8
    },
    Hulk: {
        life: 38,
        xp: 4,
        weapon: 3
    },
    Aquaman: {
        life: 34,
        xp: 4,
        weapon: 3
    }
};


/* ------------------------- */

console.info("Affichez toutes les caractÃ©ritiques de Hulk.");

console.log(characters.Hulk);


/* ------------------------- */

console.info("Les points d'expÃ©rience d'Aquaman");

console.log(characters.Aquaman.xp);


/* ------------------------- */

console.info("Qui est le plus fort entre Godzilla et Kong ?");
// let bestWarrior = characters.Godzilla.weapon > characters.Kong.weapon ? "Godzilla bote le cul de Kong !" : "Kong chie sur Godzilla !";

console.log(characters.Godzilla.weapon > characters.Kong.weapon ? "Godzilla bote le cul de Kong !" : "Kong chie sur Godzilla !");




/* ------------------------- */

console.info("La liste des noms des personnages");
for (const name in characters) {
    console.log(name);
}



/* ------------------------- */

console.info("Le nom du personnage avec le moins de points de vie");
let worstLifePoint = Number.MAX_VALUE;
let worstWarrior;

for (const name in characters) {
    worstLifePoint = Math.min(worstLifePoint, characters[name].life);
    if (worstLifePoint == characters[name].life) {
        worstWarrior = name;
    }
}

console.log(worstWarrior);


/* ------------------------- */

console.info("Qui a l'arme la plus puissante ?");
let bestWeapon = 0;
let bestWarriorWeapon;

for (const name in characters) {
    bestWeapon = Math.max(bestWeapon, characters[name].weapon);
    if (bestWeapon == characters[name].weapon) {
        bestWarriorWeapon = name;
    }
}
console.log(bestWarriorWeapon);