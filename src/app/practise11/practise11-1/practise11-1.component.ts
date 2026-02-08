import { Component } from '@angular/core';
import { Practice11Service } from '../../@service/practice11.service';

@Component({
  selector: 'app-practise11-1',
  standalone: true,
  imports: [],
  templateUrl: './practise11-1.component.html',
  styleUrl: './practise11-1.component.scss'
})
export class Practise111Component {
  constructor(
    private practice11Service: Practice11Service
  ) { }

  practice1Input = ""

  // 在ngOnInit中撈取傳遞過來的資料 並且使用console.log打印出來
  ngOnInit(): void {
    this.practice1Input = this.practice11Service.practice1Input
    console.log(this.practice1Input);

  }

}
