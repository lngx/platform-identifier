import { Component } from '@angular/core';
import { Platform, Browser } from 'ngx-platform-identifier';

@Component({
  selector: 'integration-app',
  templateUrl: './app.component.html',
})
export class AppComponent {

  isChromePlatform: boolean = false;

  constructor(platform: Platform) {
    this.isChromePlatform = platform.is(Browser.CHROME);
  }
}
