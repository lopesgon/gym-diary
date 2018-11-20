import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoadingService {

  private loaderSubject = new Subject<any>();

  loaderState = this.loaderSubject.asObservable();

  show() {
    this.loaderSubject.next(<any>{ show: true });
  }

  hide() {
    this.loaderSubject.next(<any>{ show: false });
  }
}