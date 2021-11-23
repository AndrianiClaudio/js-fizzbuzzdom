const container = document.querySelector('.container'); //acquisisco il mio container
//ciclo: stampa numeri o stringa a seconda di condizioni
for(let i = 1; i <= 100; i++) {
    const div = document.createElement('div');
    const span = document.createElement('span');
    // inserisci span come figlio di div
    div.append (span);
    // inserisce come ultimo figlio il nuovo div al container
    container.append(div);
    // -- ISTRUZIONE CONDIZIONALE PER LA STAMPA --
    if (i % 3 == 0 && i % 5 == 0) { //numero divisibile sia per 3 che per 5. stampa FizzBuzz
        console.log('FizzBuzz');
        span.innerHTML = 'FizzBuzz';
    } else if (i % 3 == 0) { //numero divisibile per 3.stampa Fizz
        console.log('Fizz');
        span.innerHTML = 'Fizz';
    } else if (i % 5 == 0) { //numero divisibile per 5. stampa Buzz
        console.log('Buzz');
        span.innerHTML = 'Buzz';
    } else { //numero non divisibile né per 3 né per 5. stampa il numero
        console.log(i);
        span.innerHTML = i;
    }
}