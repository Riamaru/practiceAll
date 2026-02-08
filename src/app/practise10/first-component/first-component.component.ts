import { Component } from '@angular/core';
import { FirstComponentChildAComponent } from './first-component-child-a/first-component-child-a.component';

@Component({
  selector: 'app-first-component',
  imports: [
    FirstComponentChildAComponent
  ],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss'
})
export class FirstComponentComponent {

}
