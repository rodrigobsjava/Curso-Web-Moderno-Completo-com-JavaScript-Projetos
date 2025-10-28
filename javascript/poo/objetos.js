const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

// Uma funçao que retorna Objeto...
const fromJSON = JSON.parse(
    '{"info":"É um JSON!"}'
);
console.log(fromJSON.info);