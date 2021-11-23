// stampa numeri da 1 a 100
for(let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) { //numero divisibile sia per 3 che per 5. stampa FizzBuzz
        console.log('FizzBuzz');
    } else if (i % 3 == 0) { //numero divisibile per 3.stampa Fizz
        console.log('Fizz');
    } else if (i % 5 == 0) { //numero divisibile per 5. stampa Buzz
        console.log('Buzz');
    } else { //numero non divisibile né per 3 né per 5. stampa il numero
        console.log(i);
    }
}