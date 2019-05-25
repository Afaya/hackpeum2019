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
  sendButtonTitle = 'Enviar';
  nextCueButtonTitle = 'Siguiente pista';
  nextFilmButtonTitle = 'Siguiente película';
  filmAnswer: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.cueList.push('El juicio final está cada vez más cerca. Jesucristo ha vuelto al mundo para llevar a cabo una última misión, antes de juzgar a la Humanidad por sus pecados.');
    this.cueList.push('El juicio final está cada vez más cerca. Jesucristo ha vuelto al mundo para llevar a cabo una última misión, antes de juzgar a la Humanidad por sus pecados.');
    this.cueList.push('El juicio final está cada vez más cerca. Jesucristo ha vuelto al mundo para llevar a cabo una última misión, antes de juzgar a la Humanidad por sus pecados.');
  }

}
