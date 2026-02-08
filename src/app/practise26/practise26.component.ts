import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-practise26',
  standalone: true,
  imports: [],
  templateUrl: './practise26.component.html',
  styleUrl: './practise26.component.scss'
})
export class Practise26Component {
  chartData = [
    {
      id: '1',
      labels: ['1月', '2月', '3月'],
      label: '月銷售',
      data: [30, 20, 40],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ]
    },
    {
      id: '2',
      labels: ['化妝品', '乳液', '精華液'],
      label: '銷售內容',
      data: [3000, 120, 240],
      backgroundColor: [
        'rgb(0, 89, 255)',
        'rgb(58, 63, 33)',
        'rgb(255, 0, 0)',
      ]
    },
  ]

  ngAfterViewInit(): void {
    for (let all of this.chartData) {
      let ctx = document.getElementById(all.id) as HTMLCanvasElement
      // 設定數據
      let data = {
        // x 軸文字
        labels: all.labels,
        datasets: [
          {
            // 上方分類文字
            label: all.label,
            // 數據
            data: all.data,
            // 線與邊框顏色
            backgroundColor: all.backgroundColor,
            //設定hover時的偏移量，滑鼠移上去表會偏移，方便觀看選種的項目
            hoverOffset: 50,
          },
        ],
      };

      // 創建圖表
      let chart = new Chart(ctx, {
        //pie是圓餅圖,doughnut是環狀圖
        type: 'pie',
        data: data,
      });
    }
  }

}
