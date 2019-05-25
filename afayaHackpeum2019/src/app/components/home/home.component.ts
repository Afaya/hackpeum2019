import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Películas Películas';
  gameDescription = 'Tu categoría seleccionar, para jugar poder';
  easyButtonTitle = 'Padawan';
  hardButtonTitle = 'Jedi';

  constructor() { }

  ngOnInit() {
  }

}
