import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  puntuation = +this.route.snapshot.paramMap.get('puntuation');
  exitButtonTitle = 'Exit';
  puntuationText: string;
  recommendationText: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(this.puntuation < 30) {
      this.puntuationText = 'Sigues siendo un Padawan. Has obtenido ' + this.puntuation + ' puntos.';
      this.recommendationText = 'Te recomendamos que dejes de jugar con la espada láser y te dediques a concentrarte en la fuerza';
    } else {
      this.puntuationText = 'Enhorabuena, eres todo un Jedi. Has obtenido '+ this.puntuation + ' puntos.';
      this.recommendationText = 'Que la fuerza te acompañe';
    }
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }
}
