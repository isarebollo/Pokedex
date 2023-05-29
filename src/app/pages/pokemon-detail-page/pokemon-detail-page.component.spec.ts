import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailPageComponent } from './pokemon-detail-page.component';

describe('PokemonDetailPageComponent', () => {
  let component: PokemonDetailPageComponent;
  let fixture: ComponentFixture<PokemonDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDetailPageComponent]
    });
    fixture = TestBed.createComponent(PokemonDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
