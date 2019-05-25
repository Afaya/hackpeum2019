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
  answerPlaceHolder = 'Introducir titulo de la pelicula';
  pointsNumber = 10;
  exitButtonTitle = 'Exit';
  sendButtonTitle = 'Send Answer';
  nextCueButtonTitle = 'Next Cue';
  nextFilmButtonTitle = 'Next Film';
  filmAnswer: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.cueList.push('Pista de ejemplo');
  }

}
