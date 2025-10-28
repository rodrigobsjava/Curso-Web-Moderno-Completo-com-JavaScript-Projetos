// Neste exercício, criaremos uma função que rotaciona o nosso vetor.
//  Levaremos em consideração as letras do alfabeto, de A a E.

// O que queremos que aconteça é: rotacionar o vetor a quantidade de 
// vezes indicada. Essa quantidade será representada pela letra Q.

// Caso o valor apresentado por Q for 1, o array deverá rotacionar um elemento:

// Criar uma função rotacao(), que receberá dois parâmetros. O vetor e a quantidade (v, Q);
// Adicione um índice para percorrer o vetor;
// Caso o vetor passado por parâmetro for um vetor vazio, retorne um vetor vazio.
// Solução:

// você pode fazer o download da solução aqui:

// [download id=”4138″]


let vetorAlfabeto = ["A", "B", "C", "D", "E"];

function rotacao(v, Q){
    if(v == []){
        v = [];
        console.log(v);
    }else{
        
        for (let i = 0; i < Q; i++) {
            v.unshift(v[v.length - 1]);
            v.pop()
            console.log(v)
        }
        
    }
}


rotacao(vetorAlfabeto, 100)