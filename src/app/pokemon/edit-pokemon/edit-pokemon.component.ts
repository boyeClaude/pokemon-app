import { PokemonFormComponent } from "./../pokemon-form/pokemon-form.component";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokemonService } from "../pokemon.service";
import { Pokemon } from "../pokemon";
import { Observable } from "rxjs";

@Component({
  selector: "app-edit-pokemon",
  template: `
    <ng-container *ngIf="pokemon$ | async as pokemon">
      <h2 class="center">Editer {{ pokemon?.name }}</h2>
      <p *ngIf="pokemon?.picture" class=" center">
        <img [src]="pokemon?.picture" alt="mon pokemon" />
      </p>
      <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
    </ng-container>
  `,
  styles: [],
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;
  pokemon$: Observable<Pokemon | undefined>;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get("id");
    if (pokemonId) {
      // this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
      this.pokemon$ = this.pokemonService.getPokemonById(+pokemonId);
      this.pokemonService.getPokemonById(+pokemonId).subscribe((pokemon) => (this.pokemon = pokemon));
    }
  }
}
