import { Component } from '@angular/core';

@Component({
  selector: 'app-practise7',
  standalone: true,
  imports: [],
  templateUrl: './practise7.component.html',
  styleUrl: './practise7.component.scss'
})
export class Practise7Component {

  // 要觸發方法請解開裡面的方法
  ngOnInit(): void {
    this.practise1();
    this.practise2();
    this.practise3();
    this.practise4();
  }

  // 練習1
  // 計算Allen有200元購買一個漢堡(50)跟三個薯條(40)後剩多少錢
  practise1() {
    console.log('第一題');

    let allenMoney = 200;
    let hamburger = 50;
    let fries = 40;

    console.log(`Allen還剩${allenMoney - hamburger - (fries * 3)}元`);
    console.log('_____________');
  }

  // 練習2
  // 計算Allen有5000元購買十個漢堡(50)跟十個薯條(40)，因為有會員卡所以可以打九折，最後剩多少錢
  practise2() {
    console.log('第二題');
    let allenMoney = 5000;
    let hamburger = 50;
    let fries = 40;
    console.log(`Allen還剩${allenMoney - (0.9 * ((10 * hamburger) + (10 * fries)))}元\n吃很多喔`);
    console.log('_____________');
  }

  // 練習3
  // 用程式判斷誰有達成VIP資格(累積花費200以上)
  practise3() {
    console.log('第三題');
    let jsonData = [
      {
        userName: 'Allen',
        payMoney: 500
      },
      {
        userName: 'Ben',
        payMoney: 20
      },
      {
        userName: 'Eric',
        payMoney: 120
      }
    ]

    let vipList = []
    for (let vip of jsonData) {
      if (vip.payMoney >= 200) {
        vipList.push(vip.userName)
      }
    }

    console.log(vipList);
    console.log('_____________');
  }

  // 練習4
  // 寫一個可以計算BMI的計算程式
  practise4() {
    console.log('第四題');
    // 身高輸入在這裡
    let height = 170;
    // 體重輸入在這裡
    let weight = 65;

    let BMI = weight / (height/100) / (height/100)

    if (BMI < 18.5) {
      console.log("體重過輕");
    } else if (BMI <= 18.5 && BMI < 24) {
      console.log("健康體重");
    } else if (BMI <= 24 && BMI < 27) {
      console.log("體重過重");
    } else {
      console.log("肥胖");
    }

    console.log(`BMI為：${BMI}`);

  }
}
