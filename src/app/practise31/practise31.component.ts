import { Component } from '@angular/core';

@Component({
  selector: 'app-practise31',
  standalone: true,
  imports: [],
  templateUrl: './practise31.component.html',
  styleUrl: './practise31.component.scss'
})
export class Practise31Component {
  jsonData = {
    questName: '問卷名稱',
    questContent: '問卷說明',
    startDate: '2024/01/01',
    endDate: '2024/05/01',
    options: [
      {
        optionName: '問題名稱1'
      },
      {
        optionName: '問題名稱2'
      },
      {
        optionName: '問題名稱3'
      }
    ]
  }
}
