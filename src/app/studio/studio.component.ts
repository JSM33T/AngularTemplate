import { Component } from '@angular/core';

@Component({
  selector: 'app-studio-component',
  templateUrl: './studio.component.html'
})
export class studioComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
