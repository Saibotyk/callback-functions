const users = [
    {
    firstName: "Pierre",
    lastName: "Dupont",
    birthdate: "2000-05-23"
    },
    {
    firstName: "Samir",
    lastName: "Desquesmi",
    birthdate: "2012-02-13"
    },
    {
    firstName: "Loanne",
    lastName: "Tredima",
    birthdate: "2002-10-22"
    },
    {
    firstName: "Paul",
    lastName: "Bismuth",
    birthdate: "1972-10-08"
    },
    {
    firstName: "Tom",
    lastName: "Sawyer",
    birthdate: "1955-01-14"
    },
    {
    firstName: "Peter",
    lastName: "Marcel",
    birthdate: "piprout"
    }
    ];
    
let age;  

for (const data in users) {
    const birthdate = new Date(users[data].birthdate);
    if (birthdate instanceof Date && !isNaN(birthdate)) {
    age = (new Date(Date.now() - birthdate)).getFullYear() - 1970;
    users[data].age = age;
    users[data].premium1825 = age >= 18 && age <= 25 ? true : false ;
} else {
    users[data].birthdate = 'birthdate is invalid'
    console.warn(users[data].firstName + " " + users[data].lastName + ' a sa date d\'anniversaire invalide' )
}
}
console.table(users);