import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-practise23',
  imports: [
    NgClass
  ],
  templateUrl: './practise23.component.html',
  styleUrl: './practise23.component.scss'
})
export class Practise23Component {
  changeClass = false

  changeBool() {
    if (!this.changeClass) {
      this.changeClass = true
    }else{
      this.changeClass = false
    }

  }
}
