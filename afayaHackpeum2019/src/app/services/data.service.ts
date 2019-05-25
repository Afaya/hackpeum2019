import { Film } from './../interfaces/film';
import { Injectable } from '@angular/core';
import films from './data/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  public getDataFilmFromJSON(): Array<Film> {
    return films.data;
  }
}
