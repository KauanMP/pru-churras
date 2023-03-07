import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  valendo = 1;
  placarUm = 0;
  placarDois = 0;

  
  constructor() {}
  
  MultiplicarUm () {
    this.valendo = 1
  }

  MultiplicarTres () {
    this.valendo = 3
  }

  MultiplicarSeis () {
    this.valendo = 6
  }

  MultiplicarNove () {
    this.valendo = 9
  }

  MultiplicarDoze () {
    this.valendo = 12
  }

  BotaoSomaTime1 () {
    this.placarUm += this.valendo
    this.valendo = 1
  }

  BotaoSomaTime2 () {
    this.placarDois += this.valendo
    this.valendo = 1
  }

  BotaoSubtraiTime1 () {
    this.placarUm -= this.valendo
    this.valendo = 1

    if (this.placarUm <= 0) {
      this.placarUm = 0
    }
  }

  BotaoSubtraiTime2 () {
    this.placarDois -= this.valendo
    this.valendo = 1

    if (this.placarDois <= 0) {
      this.placarDois = 0
    }
  }
  
  PlacarTime1 () {

  }

  PlacarTime2 () {
    
  }

  Clear () {
    this.placarUm = 0;
    this.placarDois = 0;
    this.valendo = 0;
  }
}
