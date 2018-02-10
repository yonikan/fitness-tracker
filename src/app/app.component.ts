import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth/auth.service';
// import { routerTransition } from './router.transition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [routerTransition]
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.initAuthListener();
  }
}
