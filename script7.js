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

let gameStats = {
    Nicolas: {
        win: 0,
        lost: 2,
        average: 593
    },
    Samir: {
        win: 0,
        lost: 1,
        average: 549
    },
    Tom: {
        win: 0,
        lost: 2,
        average: 519
    },
    Loanne: {
        win: 0,
        lost: 0,
        average: 630
    }
}

const gameWon = {Victoires: {Nicolas: 0, Samir: 0, Tom: 0, Loanne: 0}}
const gameLoser = {Défaites: {Nicolas: 0, Samir: 0, Tom: 0, Loanne: 0}}

for (const game of scores) {
    let averagePlayer = [];
    let winners = [];
    let losers = [];
    let scoreMax;
    let scoreMin;
    let average = 0;
    for (const player in game) {
        if (game[player] > scoreMax || scoreMax === undefined) {
            scoreMax = game[player];
            winners = [player];
        }
        else if (game[player] === scoreMax) {
            winners.push(player);
        }
        if (game[player] < scoreMin || scoreMin === undefined) {
            scoreMin = game[player];
            losers = [player];
        }
        else if (game[player] === scoreMin) {
            losers.push(player);
        }
        average += game[player] / Object.keys(game).length;
        averagePlayer = [player];
        averagePlayer.push(game[player]);
        for (const winner in winners) {
            gameStats[player].win[winner]++;
        }
    }
    for (const loser of losers) {
        gameLoser.Défaites[loser]++;
    }
    // for (const averages of averagePlayer) {
    //     gameAverage.Moyennes += [averagePlayer] / scores.length;
    // }
    
    console.log(`Le gagnant de la partie est ${winners.join(" et ")} avec un score de ${scoreMax}`);
    console.log(`Le ou les perdants de la partie est ${losers.join(" et ")} avec un score de ${scoreMin}`);
    console.log(`Le score moyen de la partie est ${Math.floor(average)}`);
}
// console.table(averagePlayer);
console.table(gameStats);












