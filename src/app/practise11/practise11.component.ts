import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Practice11Service } from '../@service/practice11.service';
import { LevelCalculatorComponent } from './level-calculator/level-calculator.component';

@Component({
  selector: 'app-practise11',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    LevelCalculatorComponent
  ],
  templateUrl: './practise11.component.html',
  styleUrl: './practise11.component.scss'
})
export class Practise11Component {
  constructor(
    private router: Router,
    private practice11Service: Practice11Service
  ) {}

  practice1Input: string = ""

  occupationType = "warrior"
  occupation = "戰士"
  levelNum = 1;
  attackNum = 10;
  defenseNum = 5;

  inputTyping(){
    this.practice11Service.practice1Input = this.practice1Input
  }
  mageButtonPressed(){
    this.occupationType = "mage"
    this.occupation = "法師";
    this.levelNum = 1;
    this.attackNum = 20;
    this.defenseNum = 2;
  }
  warriorButtonPressed(){
    this.occupationType = "warrior"
    this.occupation = "戰士";
    this.levelNum = 1;
    this.attackNum = 10;
    this.defenseNum = 5;
  }

  tankButtonPressed(){
    this.occupationType = "tank"
    this.occupation = "坦克";
    this.levelNum = 1;
    this.attackNum = 2;
    this.defenseNum = 20;
  }

  showValue(event: any){
    alert(`等級:${event.levelNum}\n攻擊力:${event.attackNum}\n防禦力:${event.defenceNum}`)
  }

  turnBackPractice11(){
    this.router.navigateByUrl('/practise11')
  }
  go11_1() {
    this.router.navigate(['/practise11/practise11_1'])
  }
}
