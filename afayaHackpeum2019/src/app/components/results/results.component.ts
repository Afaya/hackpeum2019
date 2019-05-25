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
  puntuationtext: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.puntuationtext = 'Tu puntuación final es de ' + this.puntuation + ' puntos.';
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }
}
