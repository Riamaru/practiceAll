import { Component } from '@angular/core';

@Component({
  selector: 'app-practise17',
  standalone: true,
  imports: [],
  templateUrl: './practise17.component.html',
  styleUrl: './practise17.component.scss'
})
export class Practise17Component {

  ELEMENT_DATA: any[] = [
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  ];
  ELEMENT_DATA2: any[] = [
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  ];

  // 練習 請將上面的ELEMENT_DATA資料用position欄位去做排序
  // console.log排序後將其打印出來(試著做出由大到小跟由小到大 兩種排序分開log出來)
  ngOnInit(): void {
    this.lowToHigh()
    console.log(this.ELEMENT_DATA);

    this.highToLow()
    console.log(this.ELEMENT_DATA2);
  }


  lowToHigh() {
    this.ELEMENT_DATA.sort((a, b) => {
      if (a.position < b.position) {
        return -1
      }
      if (a.position > b.position) {
        return 1
      }
      return 0
    })



  }

  highToLow() {
    this.ELEMENT_DATA2.sort((a, b) => {
      if (a.position > b.position) {
        return -1
      }
      if (a.position < b.position) {
        return 1
      }
      return 0
    })

  }
}
