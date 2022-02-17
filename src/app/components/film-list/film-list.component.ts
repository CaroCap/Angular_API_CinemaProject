import { Component, OnInit } from '@angular/core';
import { IFilm } from 'src/app/models/ifilm';
import { CinemaAPIService } from 'src/app/services/cinema-api.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  public films : IFilm[] = [];
  
  constructor(private _api : CinemaAPIService) { }

  ngOnInit(): void {
    // quand tout se passe bien
    this._api.GetAll().subscribe(
      (data)=>{
        this.films = data
        console.log(this.films); // la liste de films apparaitra bien
      }, 
      // quand il y a un soucis
      (error)=>console.error(error),
      // quand c'est fini
      ()=>console.log('Récupération de films fini...'));
      console.log(this.films); // subscribe = Asynchrone donc la liste donnera liste vide donc on doit mettre le console.log dans les { de data}
  }
  
}
