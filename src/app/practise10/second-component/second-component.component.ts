import { Component } from '@angular/core';
import { SecondComponentChildAComponent } from './second-component-child-a/second-component-child-a.component';

@Component({
  selector: 'app-second-component',
  imports: [
    SecondComponentChildAComponent
  ],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.scss'
})
export class SecondComponentComponent {

}
