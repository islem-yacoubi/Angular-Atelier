import { Component, OnInit } from '@angular/core';
import { article } from '../Core/model/Articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  titre!:"Les articles du jour";
  ListArticles!:article[];
  totalArticles !:number;


  constructor() { }

  ngOnInit(): void {
    this.ListArticles=[
      {titre:'le championnat du monde',contenu:'le champion du monde de cette année est ',auteur:'Med Taher',date:'12/12/2005',categorie:'sport'},
      {titre:'les nouveaux parents',contenu:'les nouveaux parents',auteur:'Ahmed Said',date:'11/11/2018',categorie:'Education'},
      {titre:'Comment écrire votre CV',contenu:'Pour réussir à décraucher un emploi',auteur:'Mari Elsa',date:'02/04/2017',categorie:'Travail'}
    ];
    this.totalArticles=this.ListArticles.length;
      }
      
    
  }


