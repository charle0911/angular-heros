import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes; 
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeros();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeros(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}