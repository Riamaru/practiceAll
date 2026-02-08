import { Component } from '@angular/core';

@Component({
  selector: 'app-practise14',
  standalone: true,
  imports: [],
  templateUrl: './practise14.component.html',
  styleUrl: './practise14.component.scss'
})
export class Practise14Component {
  show = true

  chaneBool() {
    if (this.show) {
      this.show = false
    }else if(!this.show){
      this.show = true
    }
  }
}

