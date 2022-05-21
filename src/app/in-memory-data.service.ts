import { POKEMONS } from "./pokemon/mock-pokemon";
import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const pokemons = POKEMONS;
    return { pokemons };
  }
}
