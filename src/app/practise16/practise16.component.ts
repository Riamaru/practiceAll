import { Component } from '@angular/core';

@Component({
  selector: 'app-practise16',
  standalone: true,
  imports: [],
  templateUrl: './practise16.component.html',
  styleUrl: './practise16.component.scss'
})
export class Practise16Component {

  // 練習1 建立userArray的interface並將any類型修改為interface
  userArray: userArray = {
    userName: 'Allen',
    lev: 18,
    props: [
      {
        propsName: '蘑菇',
        amount: 5
      },
      {
        propsName: '金幣',
        amount: 15
      }
    ]
  }

  // 練習2 建立userArray2的interface並將any類型修改為interface
  userArray2: userArray2[] = [
    {
      name: "顧客滿意度調查",
      statusCode: "E",
      status: "已完成",
      startTime: "2025-03-01T08:00:00",
      endTime: "2025-03-01T10:00:00"
    },
    {
      name: "產品使用回饋",
      statusCode: "S",
      status: "進行中",
      startTime: "2025-03-02T09:00:00",
      endTime: "2025-03-02T11:30:00"
    }
  ]
}

// 可將interface建立在這底下 或者新開一隻ts
export interface userArray{
  userName: string,
  lev: number,
  props: Array<any>
}

export interface userArray2{
  name:string,
  statusCode: string,
  status: string,
  startTime: string,
  endTime: string
}
