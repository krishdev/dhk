import { Component } from '@angular/core';

/**
 * Generated class for the HomeLandingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-landing',
  templateUrl: 'home-landing.html'
})
export class HomeLandingComponent {

  text: string;

  constructor() {
    console.log('Hello HomeLandingComponent Component');
    this.text = 'Hello World';
  }

}
