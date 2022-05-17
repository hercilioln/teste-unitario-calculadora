const chai = require('chai');
const assert = chai.assert;

const soma = (num1, num2) => +num1 + +num2;
const subtracao = (num1, num2) => +num1 - +num2;
const multiplicacao = (num1, num2)=> +num1 * +num2;
const divisao = (num1, num2) => +num1 / +num2;


describe('Testes para: Soma, Subtração, Multiplicação e Divisão ', () => {

    it('Somar: 85 + 5 = 90', () => {
        const resultado = soma(85, 5);
        assert.equal(resultado, 90);
    });

    it('Subtrair: 7 - 3 = 4', () => {
        const resultado = subtracao(7, 3);
        assert.equal(resultado, 4);
    });

    it('Multiplicar: 10 X 5 = 50', () =>{
        const resultado = multiplicacao(10,5);
        assert.equal(resultado, 50);
    });

    it('Dvidir: 120 / 2 = 60', () => {
        const resultado = divisao(120, 2);
        assert.equal(resultado, 60);
    });
  
})