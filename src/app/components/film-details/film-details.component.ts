import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFilm } from 'src/app/models/ifilm';
import { CinemaAPIService } from 'src/app/services/cinema-api.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {

  // le ! permet de dire que ce n'est pas censé être undifined mais que ça pourrait ne pas arriver tout de suite
  public film! : IFilm;

  constructor(
    private _api:CinemaAPIService, 
    private _activeRoute : ActivatedRoute,
    private _router : Router
    ) { }

  ngOnInit(): void {
    // activedRoute permet de récupérer dans l'URL des infos
    let ref : string = this._activeRoute.snapshot.params['id'];
    let id : number = parseInt(ref.substring(0, ref.indexOf("-")));
    this._api.GetOne(id).subscribe(
      (data)=>this.film = data,
      (error)=>this._router.navigateByUrl("")
      // ,
      // ()=>console.log('Récupération des détails fini...')
      );
      // console.log('Pas de détails...')
  }

}
