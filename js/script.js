const list = document.querySelector('ul');

// Punto 1 e Punto 2
for(let i=1; i<=100; i++){

    // Punto 2.1 e Punto 3
    if(i%3 == 0 && i%5 ==0){
        let fizz_buzz = 'FizzBuzz';
        console.log(fizz_buzz);
        let li = `<li id="item-${i}" class="green">${fizz_buzz}</li>`;
        list.innerHTML += li;
    }

    // Punto 2.2 e Punto 3.1
    else if(i%5 == 0){
        let buzz = 'Buzz';
        console.log(buzz);
        let li = `<li id="item-${i}" class="red">${buzz}</li>`;
        list.innerHTML += li;
    }
    
    // Punto 2.3 e Punto 3.2
    else if(i%3 == 0){
        let fizz = 'Fizz';
        console.log(fizz);
        let li = `<li id="item-${i}" class="blue">${fizz}</li>`;
        list.innerHTML += li;
    }

    // Punto 4
    else{
        console.log(i);
        let li = `<li id="item-${i}">${i}</li>`;
        list.innerHTML += li;
    }
}