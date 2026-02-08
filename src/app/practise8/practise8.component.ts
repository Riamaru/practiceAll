import { Component } from '@angular/core';
import { Practice8Component1Component } from './practice8-component1/practice8-component1.component';
import { Practice8Component2Component } from './practice8-component2/practice8-component2.component';

@Component({
  selector: 'app-practise8',
  standalone: true,
  imports: [
    Practice8Component1Component,
    Practice8Component2Component
  ],
  templateUrl: './practise8.component.html',
  styleUrl: './practise8.component.scss'
})
export class Practise8Component {

}
