import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { POKEMONS } from "./mock-pokemon";
import { Pokemon } from "./pokemon";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>("api/pokemons").pipe(
      tap((pokemonList) => this.log(pokemonList)),
      catchError((error) => {
        return this.handleError(error, []);
      })
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon | undefined>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((error) => {
        return this.handleError(error, undefined);
      })
    );
  }

  private log(response: Pokemon[] | Pokemon | undefined) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  getPokemonTypeList(): string[] {
    return ["Plante", "Feu", "Eau", "Insecte", "Normal", "Electrik", "Poison", "Fée", "Vol", "Combat", "Psy"];
  }
}
