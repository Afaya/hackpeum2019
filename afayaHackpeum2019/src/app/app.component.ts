import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'afayaHackpeum2019';

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.gotoHome();
  }

  gotoHome(): void {
    this.router.navigate(['/home']);
  }
}
