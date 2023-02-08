import { Component, OnInit } from '@angular/core';
import { emploi } from '../Core/model/emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {
  ListEmploi!: emploi[];
  en='';

  constructor() { }

  ngOnInit(): void {
    this.ListEmploi=[
      {reference:"4SE",titre:"aaaaa",entreprise:"bbbbb",etat:true},
      {reference:"4SEA",titre:"bdhfb",entreprise:"bbbbb",etat:true},
      {reference:"3b",titre:"hjdfuh",entreprise:"jfnjhgf",etat:false},
      {reference:"5SE",titre:"kjfebh",entreprise:"klrn",etat:true}
  ]
  }
  calculBilan(){
    let bilan = 0;
    for (const emploi of this.ListEmploi){
      if(!emploi.etat){
        bilan++;
      }
    }
    alert(`
    il y a ${bilan} offres d emploi non cloturées`
    );
  }
  
  recherche(value:string){
    let resultats = [];
    for (const emploi of this.ListEmploi){
      if(value==emploi.entreprise){
        resultats.push(emploi);
      }
    }
    this.ListEmploi = resultats;
    return resultats;
  }
  
  
  }
