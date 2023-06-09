import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.scss']
})
export class ImcComponent {
  // nome: string = "Patrick";
  // idade: number = 19;
  // estaTrabalhando: boolean = true;
  // compurtador = {
  //   marca: "Acer",
  //   processador: "intel Core i5",
  // };
  // listaDeContas: Array<string> = ['luz', 'agua'];

  altura: string = '';
  peso: string = '';
  resultado: string = '';

  calcularImc() {
    let altura: number = Number(this.altura);
    let peso: number = Number(this.peso);

    let imc: number = peso / (altura * altura);

    this.resultado = imc.toFixed(2);
  }
  changeAltura(event: KeyboardEvent){
    this.altura = (event.target as HTMLInputElement).value
  }

  changePeso(event: KeyboardEvent) {
    this.peso = (event.target as HTMLInputElement).value

  }
}
