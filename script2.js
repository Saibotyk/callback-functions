// Potion de soin 5 2
// Elixir magique 4 3
// Dague 1 12
// Flèche 8 1

const potionPrice = 2;
const magicPrice = 3;
const daggerPrice = 12;
const arrowPrice = 1;

let giftBiere = 30;
let totalHT = (potionPrice*5) + (magicPrice*4) + (daggerPrice*1) + (arrowPrice*8);
let tax = totalHT * 0.13;
let totalTTC = totalHT + tax;
let goldenCoins = Math.floor(totalTTC);
let silverCoins = Math.ceil(totalTTC * 10) / 10 - goldenCoins;



console.log(`Mon brave vous me devez ${goldenCoins} piéces d'or et ${(silverCoins*10)} piéces d'argent`);

if (totalTTC >= giftBiere) {
    alert("Tenez mon brave, une bonne 🍺 \!")
}


