import { Component } from '@angular/core';
import { LoadingService } from '../@service/loading.service';

@Component({
  selector: 'app-practise28',
  standalone: true,
  imports: [],
  templateUrl: './practise28.component.html',
  styleUrl: './practise28.component.scss'
})
export class Practise28Component {
  constructor(
    private loadingService: LoadingService
  ) { }

  loadingBool!: boolean
  ngOnInit(): void {
    this.loadingService.loading.subscribe((result) => {
      this.loadingBool = result
    })
  }

  openLoading() {
      this.loadingService.openLoading()
    setTimeout(() => {
      this.loadingService.closeLoading()
    }, 3000)

  }
}
