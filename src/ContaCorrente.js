import {Cliente} from "./Cliente.js";


export class ContaCorrente {
    static numeroDeContas = 0; // atributo estático que será igual a todas as contas, se alterar em algum lugar todas as contas são alteradas
    agencia;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor
        }
    }

    get cliente(){
        return this._cliente;  
    }


    _saldo = 0; //_saldo (_ significa que o atributo é privado e não podemos acessar ele fora da classe)

    //#saldo   (https://github.com/tc39/proposal-class-fields#private-fields) (# poderá ser a nova forma de privar atributo porém ainda está em conveção)

        get saldo(){   // get é um método assessor de leitura com ele atribuido não conseguimos alterar o valor somente realizar a leitura 
            return this._saldo;
        }


        constructor(agencia, cliente){
            this.agencia = agencia;
            this.cliente = cliente
            ContaCorrente.numeroDeContas += 1 
        }

    sacar(valor){ //é uma função (em Orientação a Objeto se chama método!)
        if(this._saldo >= valor){ //o THIS informa para a classe utilizar o próprio atributo.
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0){
            return;
        }

        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorScadado = this.sacar(valor);
        conta.depositar(valorScadado);
    }
}