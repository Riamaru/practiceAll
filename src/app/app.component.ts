import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from './@service/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatProgressSpinnerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practise';

  constructor(
    private loadingService: LoadingService
  ) { }

  openLoading!: boolean
  ngOnInit(): void {
    this.loadingService.loading.subscribe((result) => {
      this.openLoading = result
    })
  }
}
