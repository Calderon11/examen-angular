import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPokemon } from '../interfaces/pokemonInterface';
import { environment } from 'src/environments/environment.development';

const API_GET_ALL_POKEMON = environment.API_GET_ALL_POKEMON;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAllPokemon(){
    return this.http.get<IPokemon>(API_GET_ALL_POKEMON);
  }
}
