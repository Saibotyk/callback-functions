// Il veut que le programme que vous allez développer aujourd'hui demande chaque produit acheté
// par le client et la quantité voulue.
// Attention, il ne s’agit pas de demander quelle quantité le client souhaite pour chaque article, mais
// de demander les articles qu’il veut et en quelle quantité.
// Il vous rappelle qu’il applique une taxe de 13% sur toutes les commandes.
// Il veut une petite information si la commande excède 40 pièces d’or pour faire un petit cadeau à
// son client. Cette semaine ce sera un grigri fait maison pour repousser les Orcs.

// Consigne

// Développez le programme demandé par le marchand en prenant les données en entrée via des
// boîtes de dialogue, puis affichez au final les informations suivantes :
// ● le nom de chaque article ;
// ● le prix unitaire de chaque article ;
// ● la quantité commandée de chaque article ;
// ● le prix total pour chaque article ;
// ● le total sans taxe de la commande ;
// ● le montant de taxe appliqué à la commande ;
// ● le prix total que doit payer le client ;
// ● si le client a le droit au cadeau de la maison.
// La liste des articles vendus par le marchand peut changer. Votre programme devra toujours
// fonctionner sans en changer le code.

// Nom du produit Prix unitaire en pièce d’or (hors taxe)

let articles = {
    Potion: 2,
    Elixir: 3,
    Dague: 12,
    Flèche: 1,
    Pantalon: 8,
    Gants: 4,
    Marteau: 16,
    Epée: 22,
    Casque: 18
}
console.table(articles)
let n = 0;
let tax = 0.13;
while (n < 1) {
    n++;
    let total = [];
    let buy = prompt("Que désirez vous ?");
    for (const article in articles) {
        if (buy === articles[article]) {
            total.push(article)
        } else {
            alert("indisponible")
        }
    }
    let finish = prompt("Souhaitez vous autre chose?")
    if (finish === "oui") {
        continue
    }else if (finish === "non") {
        break
    }
}
console.table(total);



