import { Pokemon } from "./../pokemon";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { POKEMONS } from "../mock-pokemon";

@Component({
  selector: "app-detail-pokemon",
  templateUrl: "./detail-pokemon.component.html",
  styles: [],
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pokemonList = POKEMONS;
    const pokemonId = this.route.snapshot.paramMap.get("id");

    const pokemon: Pokemon | undefined = this.pokemonList.find((pokemon) => pokemon.id == Number(pokemonId));
    this.pokemon = pokemon;

    console.log("pokemon =>", this.pokemon);
  }
}
