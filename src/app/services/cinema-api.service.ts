import { Injectable } from '@angular/core';
// Importer à la main 
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { IFilm } from '../models/ifilm';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaAPIService {

  private _url : string = 'http://localhost:2807/api/Film'

  private optionRequete = {
    headers : new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  }; 

  //Générateur de requête
  constructor(private _http: HttpClient) {} // à importer dans app.module 

  // On va créer une méthode pour Get la liste de tous les films
  public GetAll() : Observable<IFilm[]> {
    return this._http.get<IFilm[]>(this._url);
  }

  // Voir les détails d'un seul film
  public GetOne(refId: number):Observable<IFilm>{
    return this._http.get<IFilm>(`${this._url}/${refId}`);
  }

  // Contacter l'API et envoyer un contenu
  public Post(content : IFilm):Observable<any>{
    return this._http.post(this._url, content);
  }
}
