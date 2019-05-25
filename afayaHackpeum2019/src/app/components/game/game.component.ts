import { Film } from './../../interfaces/film';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  level = +this.route.snapshot.paramMap.get('level');
  cueList = Array<string>();
  filmList = Array<Film>();
  actualTotalPoints = 0;
  actualFilmIndex = 0;
  actualCueNumber = 1;
  actualFilm: Film;
  answerPlaceHolder = 'Introducir titulo de la pelicula';
  pointsNumber = 10;
  exitButtonTitle = 'Exit';
  sendButtonTitle = 'Send Answer';
  nextCueButtonTitle = 'Next Cue';
  nextFilmButtonTitle = 'Next Film';
  filmAnswer = '';

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.loadFilmData();
    this.selectFilm();
    this.cueShowing();
  }

  loadFilmData(): void {
    this.filmList = this.dataService.getDataFilmFromJSON().filter(x => x.categoria === this.level);
  }

  selectFilm(): void {
    this.actualFilm = this.filmList[this.actualFilmIndex];
    this.actualFilmIndex++;
  }

  cueShowing(): void {
    let actualCue = '';

    switch (this.actualCueNumber) {
      case 1:
        actualCue = this.actualFilm.pista1;
        this.pointsNumber = 10;
        break;
      case 2:
        actualCue = this.actualFilm.pista2;
        this.pointsNumber = 6;
        break;
      case 3:
        actualCue = this.actualFilm.pista3;
        this.pointsNumber = 3;
        break;
    }

    this.cueList.push(actualCue);
    this.actualCueNumber++;
  }

  nextFilm(): void {
    this.pointsNumber = 10;
    this.actualCueNumber = 1;
    this.cueList = Array<string>();
    this.selectFilm();
    this.cueShowing();
  }

  checkAnswer(): void {
    if (typeof (this.filmAnswer) !== 'undefined' && this.filmAnswer !== ''
      && this.filmAnswer.toLowerCase() === this.actualFilm.titulo.toLowerCase()) {
      this.actualTotalPoints += this.pointsNumber;
      this.nextFilm();
    } else {
      if (this.actualCueNumber > 3) {
        this.nextFilm();
      } else {
        this.filmAnswer = '';
        this.answerPlaceHolder = 'Respuesta NO correcta. Intentalo de nuevo';
        this.cueShowing();
      }
    }
  }
}
