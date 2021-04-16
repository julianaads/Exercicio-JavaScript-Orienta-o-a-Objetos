
import {Cliente} from "../src/Cliente.js"
import {ContaCorrente} from "../src/ContaCorrente.js"


const cliente1 = new Cliente("Ricardo", 11122233309);

const cliente2 = new Cliente("Alice", 8882223309);

const cliente3 = new Cliente("Alana", 7775553310 )

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo._saldo = 0;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);

const conta2 = new ContaCorrente(1002, cliente2);

let valor = 200
contaCorrenteRicardo.transferir(valor, conta2);


console.log(ContaCorrente.numeroDeContas)




