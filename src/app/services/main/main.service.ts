import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  saved: any = {}

  constructor() { }

  saveElement(key: string, element: any) {
    this.saved[key] = element
    localStorage.setItem(key, element)
  }

  getElement(key: string) {
    return this.saved[key]
  }
}
