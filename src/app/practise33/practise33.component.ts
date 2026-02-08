import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-practise33',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './practise33.component.html',
  styleUrl: './practise33.component.scss'
})
export class Practise33Component {
  nameInput = ""
  phoneInput = ""
  ageInput = ""

  restructureUserContent: Array<any> = []

  jsonData = {
    title: '重組資料練習',
    content: '練習將原先的josn資料格式重新組合',
    hint: '需要去思考要怎麼抓取使用者填寫的內容，並在最後點擊按鈕後將其資料打包',
    userContent: [
      {
        questName: '姓名'
      },
      {
        questName: '電話'
      },
      {
        questName: '年紀'
      }
    ]
  }
  ngOnInit(): void {
    this.inputQuestAnswer()
  }

  inputQuestAnswer() {
    for (let array of this.jsonData.userContent) {
      this.restructureUserContent.push({ ...array, questAnswer: '' })
    }

  }

  confirm() {
    for (let answer of this.restructureUserContent) {
      if (answer.questName == '姓名') {
        answer.questAnswer = this.nameInput
      } else if (answer.questName == '電話') {
        if (this.phoneInput) {
          answer.questAnswer = this.phoneInput
        } else {
          answer.questAnswer = '不好意思我沒有手機耶'
        }
      } else if (answer.questName == '年紀') {
        if (this.ageInput) {
          answer.questAnswer = this.ageInput
        } else if (!this.ageInput) {
          answer.questAnswer = '秘密'
        }
      }
    }
    this.jsonData.userContent = this.restructureUserContent
    console.log(this.jsonData);

  }

  @ViewChild('phone') phoneInputElement!: ElementRef;
  @ViewChild('age') ageInputElement!: ElementRef;

  phoneFocus() {
    this.phoneInputElement.nativeElement.focus();
  }

  ageFocus() {
    this.ageInputElement.nativeElement.focus();
  }

  deletePhoneString() {
    this.phoneInput = this.phoneInput.replace(/[^0-9]/g, '');
  }

  deleteAgeString(){
    this.ageInput = this.ageInput.replace(/[^0-9]/g, '');
  }
}
