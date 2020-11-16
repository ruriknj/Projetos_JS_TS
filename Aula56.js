// Escrever uma função que recebe 2 numeros e retorne o maior deles
/* function max(x, y) {
    if(x > y)
    return x
        return y;
}; */

const max2 = (x, y) => {
    return x > y ? x : y
}

console.log(max2(12, 16))