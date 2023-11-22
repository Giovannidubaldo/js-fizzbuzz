const list = document.querySelector('ul');

// Punto 1 e Punto 2
for(let i=1; i<=100; i++){

    // Punto 2.1 e Punto 3
    if(i%3 == 0 && i%5 ==0){
        let i = 'FizzBuzz';
        console.log(i);
        let li = `<li id="item-${i}">${i}</li>`;
        list.innerHTML += li;
    }

    // Punto 2.2 e Punto 3.1
    else if(i%5 == 0){
        let i = 'Buzz';
        console.log(i);
        let li = `<li id="item-${i}">${i}</li>`;
        list.innerHTML += li;
    }
    
    // Punto 2.3 e Punto 3.2
    else if(i%3 == 0){
        let i = 'Fizz';
        console.log(i);
        let li = `<li id="item-${i}">${i}</li>`;
        list.innerHTML += li;
    }

    // Punto 4
    else{
        console.log(i);
        let li = `<li id="item-${i}">${i}</li>`;
        list.innerHTML += li;
    }
}