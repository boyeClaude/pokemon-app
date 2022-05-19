import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  public selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find((pokemon) => pokemon.id == +pokemonId);
    console.log(pokemon?.name);
    this.pokemonSelected = pokemon;
  }
}
