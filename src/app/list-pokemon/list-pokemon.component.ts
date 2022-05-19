import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "../mock-pokemon";
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-list-pokemon",
  templateUrl: "./list-pokemon.component.html",
  styles: [],
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;
}
