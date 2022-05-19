import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { POKEMONS } from "../mock-pokemon";
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-list-pokemon",
  templateUrl: "./list-pokemon.component.html",
  styles: [],
})
export class ListPokemonComponent {
  constructor(private router: Router) {}

  pokemonList: Pokemon[] = POKEMONS;

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(["/pokemon", pokemon.id]);
  }
}
