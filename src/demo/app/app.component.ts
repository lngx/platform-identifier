import { Component } from '@angular/core';
import { Platform, Browser } from 'ngx-platform-identifier';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

  isChromePlatform = false;

  constructor(platform: Platform) {
    this.isChromePlatform = platform.is(Browser.CHROME);
  }
}
