var array = ['Banana','Uva', 'Melancia', 'Computador'];
console.log('Array original: ' + array);

// Array.pop() - remove o último elemento do array:
// Retorno: O elemento removido


array.pop();

console.log('Array após o pop: ' + array);



// Array.push(elemento1, elemento2, ...) - insere elementos ao final do array.
// Retorno: O novo length

array.push('Laranja', 'Jabuticaba');

console.log('Array após o pop: ' + array);





// Array.shift() - remove o primeiro elemento do array
// Retorno: O elemento foi removido


array.shift();

console.log('Array após o pop: ' + array);




// Array.unshift(elemento1, elemento2, ...) - Insere elementos ao final do array.
// Retorno"o novo length 

array.unshift('Banana', 'Manga');

console.log('Array após o unshift: ' + array);




// Array.reverse() - Inverte a ordem dos elementos de um array

array.reverse();

console.log('Array após o reverse: ' + array);




// Array.fill(valor, começo, fim) - Preenche o array, ou parte dele, com um valor 
// Parâmetros: 
//    valor - Valor com que preencheremos o array
//    começo -  Índice do primeiro elemento a ser preenchido (opcional)
//    fim  -  Índice do último elemento a ser preenchido (opcional)

array.fill('já comi', 1, 4);

console.log('Array após o fill: ' + array);