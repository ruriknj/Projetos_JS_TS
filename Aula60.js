/* try {
    // É executado quando não há erros
    console.log('Abrir um arquivo');
    console.log('Manipulei um arquivo e gerou erro');
    console.log('Fechei o arquivo');
} catch (e) {
    //É executada qiando há erros
    console.log('Tratando o erro');
} finally {
    // sempre
    console.log('Sempre é executado');
}
 */
const retornaHora = (data) => {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(data);
    console.log(hora);
} catch (e) {
    //Tratar erro
    console.log(e);
} finally {
    console.log('Tenha um bom dia');
}
