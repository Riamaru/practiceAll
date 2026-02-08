import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-practise9',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './practise9.component.html',
  styleUrl: './practise9.component.scss'
})
export class Practise9Component {
  levelNum = 1
  attackNum = 10
  defenceNum = 10

  levelInput!: number | null

  resetButtonPressed() {
    this.levelNum = 1
    this.attackNum = 10
    this.defenceNum = 10
  }

  levelUpButtonPressed() {
    this.levelNum += 1
    this.attackNum = this.attackNum * 3
    this.defenceNum = this.defenceNum * 2
  }
  levelDownButtonPressed() {
    if (this.levelNum > 1) {
      this.levelNum -= 1
      this.attackNum = this.attackNum / 3
      this.defenceNum = this.defenceNum / 2
    } else {
      alert('Can not smaller than 1')
    }
  }

  correctLevelNum() {
    if (this.levelInput) {
      this.resetButtonPressed()
      for (let input = 1; input < this.levelInput; input++) {
        this.levelUpButtonPressed()
      }
    }
    this.levelInput = null

  }
}
