/*
RECURSIVIDADE
fatorial
5! = 5 x 4 x 3 x 2 x 1 = 120
5! = 5 x 4!

n! = n x (n-1)!
*/


function fatorial(numero) {

    if (numero == 1) {

        return 1        
    }
    
    return numero * fatorial(numero-1);
}

console.log(fatorial(5));