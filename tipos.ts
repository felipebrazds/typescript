//Boolean
const contaPaga: boolean = false;

//Number
const idade: number = 27;
const avaliacao: number = 8.9;

//String
const nome: string = 'Felipe Braz';

//Array
const cidades: string[] = ['Goiânia', 'São Paulo', 'Brasília'];
const numbers: Array<number> = [0, 2, 5, 88, 74, 96, 53, 21];

//Tuple
let jogadores: [string, string, string];
jogadores = ['Dybala', 'Cristiano Ronaldo', 'Messi'];

//Enum
enum statusAprovacao {
  Aprovado = '001',
  Pendente = '002',
  Rejeitado = '003'
}
const statusAprov: statusAprovacao = statusAprovacao.Aprovado;

//Any
const retornoDaApi: any[] = [12, 'Felipe', true];
const retornoDaApi2: any = {
  //............
}

//Void
function printarNaTela(msg: string): void {
  console.log(msg);
}

//Null e Undefined
const u: undefined = undefined;
const n: null = null;

//Object
function criar(objeto: object){
  //....
}
criar({
  propriedade: 1;
})

//Never
function loopInfinito(): never {
  while(true) {}
}

function erro(mensagem: string): never {
  throw new Error(mensagem);
}

function falha(): never {
  return erro('Algo falhou');
}

//Union Types
function exibirNota(nota: number | string) {
  console.log(`A nota é ${nota}`);
}

exibirNota('10');

//Alias
type Familia = string[];
const familia: Familia = ['Felipe', 'Bruna', 'Miguel', 'Pedro'];

function verFamilia(familia: Familia){
  //....
}

//Null - Regra "strictNullChecks:" false no tsconfig.json
let altura: number = 1.6;
altura = null;

type Contato = {
  nome: string;
  telefone1: string;
  /* telefone2: string | null; */
  telefone2?: string;
}

const contato: Contato = {
  nome: 'Felipe',
  telefone1: '9999999999',
  telefone2: '6666666666'
}

//Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();

const input = document.getElementById("numero1") as HTMLInputElement;
console.log(input.value);