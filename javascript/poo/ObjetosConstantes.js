const pessoa = {
    nome:'João',
}
console.log(pessoa.nome);

pessoa.nome = 'Pedro';
console.log(pessoa);

pessoa.end = "Rua A";
console.log(pessoa);


pessoa.salario = 2000;
console.log(pessoa);

delete pessoa.salario;
console.log(pessoa);

delete pessoa.end
console.log(pessoa);

Object.freeze(pessoa)