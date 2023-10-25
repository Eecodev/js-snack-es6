/*
* • SNACK 1

Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.

Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']

Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, (tableName), nome dell'ospite,  (guestName), posto occupato. (place).

Generiamo e stampiamo in console la lista per i segnaposto.
*/

/*
* • SNACK 2

Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...

Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo: ES. (Marco della Rovere => MARCO DELLA ROVERE);

Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70.

Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120.
*/

/*
 *SNACK 1
*/
// const tavoloVip = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']

// let assegnazionePosti = tavoloVip.map((el, index)=>{
//     return {
//         Guest: el,
//         Tavolo: 'Vip',
//         Seat: index + 1
//     }
// })
// console.log(assegnazionePosti);



// let result = []
// tavoloVip.forEach((element, index)=>{
//     result.push({
//         Guest: element,
        // Tavolo: 'Vip',
//         seat: index + 1
//     })
// })
// console.log(result);

/*
 *SNACK 2
*/

// const studentsList = [
//     {
//         id: 213,
//         name: 'Marco della Rovere',
//         grades: 78
//     },
//     {
//         id: 110,
//         name:'Paola Cortellessa',
//         grades: 96
//     },
//     {
//         id: 250,
//         name: 'Andrea Mantegna',
//         grades: 48
//     },
//     {
//         id: 145,
//         name: 'Gaia Borromini',
//         grades: 74
//     },
//     {
//         id: 196,
//         name: 'Luigi Grimaldello',
//         grades: 68
//     },
//     {
//         id: 102,
//         name: 'Piero della Francesca',
//         grades: 50
//     },
//     {
//         id: 120,
//         name: 'Francesca da Polenta',
//         grades: 84
//     }
// ]

// /*
// * method map
// */
// // let listUpperCase = studentsList.map((el) =>{
// //     return el.name.toUpperCase()
// // })
// // console.log(listUpperCase);

// /*
// * method forEach
// */

// let listUpperCase = []
// studentsList.forEach((el)=>{
//     listUpperCase.push(el.name.toUpperCase());
// })
// console.log(listUpperCase);

// let scoreOver70 = studentsList.filter((el)=> el.grades > 70);
// console.log(scoreOver70);

// let scoreOver70IdOver120 = studentsList.filter((el)=> el.grades > 70 & el.id > 120);
// console.log(scoreOver70IdOver120);

/*
* • SNACK 3

Creare un array di oggetti:

Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/


/*
 *SNACK 3
*/

const obj = [
    {
        name: 'Scott Speedster',
        kg: 6
    },
    {
        name: 'Canyon Grail',
        kg: 5
    },
    {
        name: 'Giant Defy Advanced',
        kg: 8
    },
    {
        name: 'Canyon Endurace',
        kg: 7
    },
    {
        name: 'Bianchi Sprint',
        kg: 10
    },
    {
        name: 'Trek Emonda',
        kg: 9
    }
]


let lighterObj;
for(let i = 0; i < obj.length; i++){
    if(i === 0){
        lighterObj = obj[i];
    }
    if(obj[i].kg < lighterObj.kg){
        lighterObj = obj[i];
    }
}


const {name, kg} = lighterObj;
console.log(name, kg);

const rowEl = document.querySelector(".row");
console.log(rowEl);


function printBikes(bike){
    const divEl = document.createElement('div');
    col.classList.add("col-4");
    const template =`
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${bike.name}</h5>
            <p class="card-text">${bike.kg}</p>
            <a href="#" class="btn btn-primary">Get Info</a>
        </div>
    </div>
    `
    col.innerHTML = template;
    rowEl.append(col);
}
