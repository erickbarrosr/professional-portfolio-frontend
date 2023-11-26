import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor() {}

  message: string = '';

  add(message: string) {
    this.message = message;

    setTimeout(() => {
      this.clear();
    }, 3000);
  }

  clear() {
    this.message = '';
  }
}
