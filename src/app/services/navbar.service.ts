import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private navbarColor: string = '';
  public navbarColorChanged: Subject<string> = new Subject<string>();

  setNavbarColor(color: string) {
    this.navbarColor = color;
    this.navbarColorChanged.next(color);
  }

  getNavbarColor(): string {
    return this.navbarColor;
  }
}
