import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }


  private _loading = new BehaviorSubject<boolean>(false)
  loading = this._loading.asObservable()

  openLoading() {
    this._loading.next(true)
  }

  closeLoading(){
    this._loading.next(false)
  }
}
