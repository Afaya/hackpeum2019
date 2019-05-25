import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Peliculas Peliculas';
  gameDescription = 'Juego para adivinar peliculas mediantes diferentes pistas (máximo de tres), elige una categoría.';
  easyButtonTitle = 'Padawan';
  hardButtonTitle = 'Jedi';

  constructor() { }

  ngOnInit() {
  }

}
