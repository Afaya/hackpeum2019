import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Películas Películas';
  gameDescription1 = 'Tu categoría seleccionar';
  gameDescription2 = 'para jugar poder';
  easyButtonTitle = 'Padawan';
  hardButtonTitle = 'Jedi';
  padawanLevel = 1;
  jediLevel = 2;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goPadawanGame(): void {
    this.router.navigate(['/game/' + this.padawanLevel]);
  }

  goJediGame(): void {
    this.router.navigate(['/game/' + this.jediLevel]);
  }
}
