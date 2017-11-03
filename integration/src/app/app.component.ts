import { Component } from '@angular/core';
import { Platform } from '@lngx/platform-identifier';

@Component({
  selector: 'integration-app',
  templateUrl: './app.component.html',
})
export class AppComponent {

  browser: string;
  engine: string;
  os: string;

  constructor(platform: Platform) {
    this.browser = platform.browser.toString();
    this.engine = platform.engine.toString();
    this.os = platform.os.toString();
  }
}
