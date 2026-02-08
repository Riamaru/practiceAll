import { Component } from '@angular/core';

@Component({
  selector: 'app-practise32',
  standalone: true,
  imports: [],
  templateUrl: './practise32.component.html',
  styleUrl: './practise32.component.scss'
})
export class Practise32Component {
  studentData = [
    {
      name: '王小明',
      age: 18,
      gender: 'M',
      goodAtSubject: [
        { subject: '數學' },
        { subject: '英文' },
        { subject: '物理' }
      ]
    },
    {
      name: '陳美麗',
      age: 19,
      gender: 'F',
      goodAtSubject: [
        { subject: '化學' },
        { subject: '生物' },
        { subject: '數學' }
      ]
    },
    {
      name: '李大仁',
      age: 20,
      gender: 'M',
      goodAtSubject: [
        { subject: '歷史' },
        { subject: '地理' },
        { subject: '英文' }
      ]
    }

  ]
}
