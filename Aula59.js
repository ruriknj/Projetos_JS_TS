soma = (x, y) => {
    if (
        typeof x != 'number' ||
        typeof y != 'number'
    ) {
        throw new Error('x e y precisam se números.');
    }
    return x + y;
};

try {
    console.log(soma(1, 5));
} catch (error) {
    console.log(error);
    console.log('Alguma coisa mais amigável pro usuário.');
}