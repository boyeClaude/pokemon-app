import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { POKEMONS } from "./mock-pokemon";
import { Pokemon } from "./pokemon";

const HTTP_OPTIONS = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

const API_URL = "api/pokemons";
@Injectable({
  providedIn: "root",
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${API_URL}`).pipe(
      tap((pokemonList) => this.log(pokemonList)),
      catchError((error) => {
        return this.handleError(error, []);
      })
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon | undefined>(`${API_URL}/${pokemonId}`).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((error) => {
        return this.handleError(error, undefined);
      })
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    return this.http.put<Pokemon>(`${API_URL}`, pokemon, HTTP_OPTIONS).pipe(
      tap((response) => this.log(response)),
      catchError((error) => {
        return this.handleError(error, undefined);
      })
    );
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(`${API_URL}`, pokemon, HTTP_OPTIONS).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deletePokemonById(pokemonId: number): Observable<null> {
    return this.http.delete<null>(`${API_URL}/${pokemonId}`, HTTP_OPTIONS).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  searchPokemonList(term: string): Observable<Pokemon[]> {
    if (term.length <= 1) {
      return of([]);
    }

    return this.http.get<Pokemon[]>(`${API_URL}/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  private log(response: Pokemon[] | Pokemon | undefined | null) {
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
