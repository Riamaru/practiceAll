import { Component, Input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-level-calculator',
  imports: [
    FormsModule
  ],
  templateUrl: './level-calculator.component.html',
  styleUrl: './level-calculator.component.scss'
})
export class LevelCalculatorComponent {


  @Input() levelNum!: number;
  @Input() attackNum!: number;
  @Input() defenceNum!: number;
  @Input() occupation!: string
  @Input() occupationType!: string
  levelInput!: number | null

  outputJson = output<any>()

  resetButtonPressed() {
    if (this.occupationType == 'warrior') {
      this.levelNum = 1
      this.attackNum = 10
      this.defenceNum = 5
    } else if (this.occupationType == 'mage') {
      this.levelNum = 1
      this.attackNum = 20
      this.defenceNum = 2
    } else if (this.occupationType == 'tank') {
      this.levelNum = 1
      this.attackNum = 2
      this.defenceNum = 20
    }
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
      if (this.levelInput > 0) {
        for (let input = 1; input < this.levelInput; input++) {
          this.levelUpButtonPressed()
        }
      } else {
        alert('Can not smaller than 1')
      }
    }
    this.levelInput = null
  }

  confirmCorrect() {
    let output = {
      levelNum: this.levelNum,
      attackNum: this.attackNum,
      defenceNum: this.defenceNum
    }
    this.outputJson.emit(output)
  }
}
