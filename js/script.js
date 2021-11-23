//acquisisco il mio container
const container = document.querySelector('.container');
for(let i = 1; i <= 100; i++) {
    const div = document.createElement('div');
    const span = document.createElement('span');
    //aggiungi classe block al div
    div.classList.add('block');
    // inserisci span come figlio di div
    div.append (span);
    // inserisce come ultimo figlio del container il nuovo div
    container.append(div);
    if (i % 3 == 0 && i % 5 == 0) { //numero divisibile sia per 3 che per 5
        div.classList.add('fizzbuzz-color')
        span.innerHTML = 'FizzBuzz';
    } else if (i % 3 == 0) { //numero divisibile per 3
        div.classList.add('fizz-color')
        span.innerHTML = 'Fizz';
    } else if (i % 5 == 0) { //numero divisibile per 5
        div.classList.add('buzz-color')
        span.innerHTML = 'Buzz';
    } else { //numero non divisibile né per 3 né per 5
        div.classList.add('base-color')
        span.innerHTML = i;
    }
}