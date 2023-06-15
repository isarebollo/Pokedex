import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Results } from 'src/app/models/JSONinterfaces/pokemon.interface';
import { IPokemonDetail } from 'src/app/models/external/pokemonDetail.interface';
import { NavbarService } from 'src/app/services/navbar.service';
import { PokemonService } from 'src/app/services/pokemon.service';

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
    private pokemonService: PokemonService,
    private router: Router,
    private lc: NgZone
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
      }
    });
  }

  
}
