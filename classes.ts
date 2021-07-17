class Data{
  // public dia: number;
  // mes: number;
  // ano: number;

  constructor(public dia: number, public mes: number, public ano: number){
    // this.dia = dia;
    // this.mes = mes;
    // this.ano = ano;
  }
}

const data = new Data(1, 1, 2021);
console.log(data.dia);
console.log(data.mes);

const data2 = new Data(1, 1); //O TS reclama que não tem 3 dados inseridos

//Modificadores de acesso
class Carro{
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 220
  ) {}

  private alteraVelocidade(delta: number){
    const novaVelocidade = this.velocidadeAtual + delta;

    if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima){
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }
  }

  acelerar(){
    this.alteraVelocidade(5);
  }

  frear(){
    this.alteraVelocidade(-5);
  }
}

const carro = new Carro('Fiat', 'Palio', 220);
carro.acelerar();

//Herança
class Camaro extends Carro{
  private turbo = false;
  constructor(){
    super('Chevrolet', 'Camaro', 280);
  }

  ligarTurbo(){
    this.turbo = true;
  }

}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();