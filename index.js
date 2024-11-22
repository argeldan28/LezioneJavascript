/*** Esercizio 1 ***/
// var nome = prompt('Inserisci il tuo nome')
// console.log('Ciao '+ nome+'!');


/*** Esercizio 2 ***/
// var x =  5;
// var y = 10;
// var z = x;
// x = y;
// y = z;
// console.log(x);
// console.log(y);


/*** Esercizio 3 ***/
// var eta = prompt('Quanti anni hai?');
// var puoEntrareoNo = eta >= 14;
// console.log('Hai '+ eta +' anni');
// console.log('Il cliente è ammesso in sala? '+puoEntrareoNo);


/*** Esercizio 4 ***/
// var isFemale = true;
// var peso = 100;
// var altezza = 1.70;
// var bmi = peso / (altezza*altezza)
// var isAdmitted = isFemale && (bmi >= 25)
// console.log('Il cliente è ammesso in palestra? '+isAdmitted);

// var peso = prompt('Inserisci il tuo peso(kg):')
// var altezza = prompt('Inserisci la tua altezza (m):')
// var bmi = peso / (altezza*altezza);
// var sovrappeso = bmi > 25;
// console.log('Peso: '+peso);
// console.log('Altezza: '+altezza);
// console.log('Il tuo BMI: '+bmi);5
// console.log('Sei sovrappeso? '+sovrappeso);


/*** Esercizio 5 ***/
// var invitati = 5;
// var vodka = 5;


// # Esercizio Array - Componi la Frase
// Dato il seguente array di string, stampare su console la frase ciao ragazzuoli come va?
// var words = ['ragazzuoli', 'va', '?', ' ', 'ciao', 'come'];
// var msg = words[4]+words[3]+words[0]+words[3]+words[5]+words[3]+words[1]+words[3]+words[2];
// console.log(msg);


// let prices = [5,3.5,10];

// let prices2 = prices;

// prices2[0] = 55;

// console.log('Inizio');
// var temp = 39;
// console.log('Temperatura: '+temp);

// if (temp >= 37) {
//     console.log('Hai la febbre!');
    
// } else {
//     console.log('Stai bene!');
    
// }



// # Esercizio - Autovelox
// Scrivere un programma che richieda in input la velocità di un veicolo (in km/h) e stampi in output:

// "multa 1000 euro" se la velocità è superiore a 200km/h
// "multa 500 euro" se la velocità è superiore a 160km/h
// "multa 200 euro" se la velocità è superiore a 130km/h
// "limite rispettato" se la velocità è minore o uguale a 130km/h


// var velocità = prompt('Inserisci la velocità: ');

// if (velocità > 200) {
//     console.log('Hai una multa di 1000 euro');
// } else if(velocità > 160){
//     console.log('Hai una multa di 500 euro');
// } else if(velocità > 130){
//     console.log('Hai una multa di 200 euro');
// } else if(velocità <= 130){
//     console.log('Limite rispettato!');
// }



/***  CICLO WHILE  ***/

// var i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++
// }


// # Esercizio - Stampare i numeri pari
// Stampare tutti i numeri pari da 0 a 100
// var i = 0;

// while (i <= 100) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i++
// }


// # Esercizio - Sconti di Natale
// Dato un array di number contenente prezzi di prodotti calcolare la somma dei prezzi escludendo i prodotti che costano meno di 10euro.

// var prices = [5, 25, 10, 100, 2];

// var sum = 0;
// var i = 0;
// while (i <= prices.length) {
//     if (prices[i] >= 10) {
//         sum += prices[i];
//     }
//     i++
// }

// console.log(sum);

/*** Esercizio Iterazione ***/

// var num =[1,2,3,4,5,6,7];

// var i = 0;
// var numMax = 0;
// var numMin = 0;
// while (i <= num.length) {
//     if (numMax > num[i] ) {
        
//     }
// }

// # Esercizio - FizzBuzz
// Stampare tutti i numeri da 1 a 100 considerando le seguenti particolarità:

// se un numero è multiplo di 3 stampare, al suo posto, la stringa Fizz
// se un numero è multiplo di 5 stampare, al suo posto, la stringa Buzz
// se un numero è multiplo di 15 stampare, al suo posto, la stringa FizzBuzz

for (var i = 1; i <= 100; i++) {
   
    if (i % 15 == 0) {
        console.log('FizzBuzz');
    }
   
    else if (i % 3 == 0) {
        console.log('Fizz');
    }
  
    else if (i % 5 == 0) {
        console.log('Buzz');
    }
    
    else {
        console.log(i);
    }
}