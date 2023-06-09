import { Component, OnInit, Input } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  navbarColor: string = '';

  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarService.navbarColorChanged.subscribe((color: string) => {
      this.navbarColor = color;
    });
  }
}
