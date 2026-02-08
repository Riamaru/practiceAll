import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-practise15',
  standalone: true,
  imports: [],
  templateUrl: './practise15.component.html',
  styleUrl: './practise15.component.scss'
})
export class Practise15Component {
  constructor(private httpClient: HttpClient) { }

  apiJson!: any


  ngOnInit(): void {
    this.httpClient.get('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-065?Authorization=CWA-0DF49296-2C40-408C-AE52-17D1EE4F5728&limit=10&format=JSON')
  .subscribe((data) => {
    this.apiJson = data
    console.log(this.apiJson);

  })
  }
}
