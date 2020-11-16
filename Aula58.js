/* Escreva um função que recebe um numero e
retorne o seguinte:
Numero é divisivel por 3 = Fizz
Numero é divisivel por 5 = Buzz
Numero é divisivel por 3 e 5 = FizzBuzz
Numero NÂO é divisivel por 3 e 5 = Retorna oo proprio número
Use a função com números de 0 a 100 */

const FizzBuzz = (numero) => {

    while (numero <= 100 || typeof numero != Number) {
        if ((numero % 3 == 0) && (numero % 5 == 0))
            return "FizzBuzz"
        if (numero % 3 == 0)
            return "Fizz"
        if (numero % 5 == 0)
            return "Buzz"
        return numero
    }

    console.log('Escolha um numero igual ou menor que 100, numero escolhido foi:', numero)
}

// console.log(FizzBuzz("1s"))

for (let i = 0; i <= 100; i++) {

    console.log(i, FizzBuzz(i))
}