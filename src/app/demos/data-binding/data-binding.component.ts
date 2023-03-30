import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: "./data-binding.component.html"
})
export class DataBindingComponent {

 public contadorClique: number = 2
 public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg"

 adicionarClique(){
  this.contadorClique++;

 }

 zerarContador(){
  this.contadorClique = 0
 }

 public nome: string = "";

 keyUp(event: any){
  //toda vez que tu solta a tecla ele atualiza
 this.nome = event.target.value
 }
}
