import { Component, OnInit, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  navbarColor: string = '';

  constructor(private navbarService: NavbarService, private router:Router) { }

  ngOnInit(): void {
    this.navbarService.navbarColorChanged.subscribe((color: string) => {
      this.navbarColor = color;
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects;
        // Verifica la URL actual y actualiza la clase del navbar en consecuencia
        this.navbarColor = currentUrl.includes('/pokemon/') ? ' ' : 'white-nav';
      }
    });
  }
}
