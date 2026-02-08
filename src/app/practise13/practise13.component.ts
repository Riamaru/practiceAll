import { Component } from '@angular/core';

@Component({
  selector: 'app-practise13',
  standalone: true,
  imports: [],
  templateUrl: './practise13.component.html',
  styleUrl: './practise13.component.scss'
})
export class Practise13Component {
  show = true

  chaneBool() {
    if (this.show) {
      this.show = false
    }else if(!this.show){
      this.show = true
    }
  }
}

