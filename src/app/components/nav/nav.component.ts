import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IPokemonDetail } from 'src/app/models/external/pokemonDetail.interface';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchText = '';
  showSearch = true;
  _timeout: any = null;


  navbarColor: string = '';
  searchResults: IPokemonDetail[] = [];

  constructor(
    private navbarService: NavbarService,

    private router: Router,

  ) { }

  ngOnInit(): void {
    this.navbarService.navbarColorChanged.subscribe((color: string) => {
      this.navbarColor = color;
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects;
        // Verifica la URL actual y actualiza la clase del navbar en consecuencia
        this.navbarColor = currentUrl.includes('/pokemon/') ? ' ' : 'white-nav';
        this.navbarColor = currentUrl.includes('/pokemon/') ? ' ' : 'white-nav';
      }
    });
  }

  goToPreviousRoute(): void {
    this.router.navigate(['/pokemon'])
  }



}
