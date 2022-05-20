import { Pokemon } from "../pokemon";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-detail-pokemon",
  templateUrl: "./detail-pokemon.component.html",
  styles: [],
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  theId: any;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    const pokemonId = this.route.snapshot.paramMap.get("id");
    if (pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }

  goBack() {
    this.router.navigate(["/pokemons"]);
  }
}
