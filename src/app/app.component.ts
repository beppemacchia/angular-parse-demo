import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParseService } from './shared/services/parse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet],
})
export class AppComponent {
  title = 'login-app';

  #parseService = inject(ParseService);
  constructor() {
    this.#parseService.registerSubclasses();
  }
}
