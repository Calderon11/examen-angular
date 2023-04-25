import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IDataPokemon } from 'src/app/interfaces/pokemonInterface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pantalla-examen',
  templateUrl: './pantalla-examen.component.html',
  styleUrls: ['./pantalla-examen.component.css'],
  providers: [MessageService]
})
export class PantallaExamenComponent implements OnInit{
  listPokemon: IDataPokemon [] = [];

  title = 'Examen Angular';
  nombre = 'Cindy';
  apellido = 'Calderón Rios';

  constructor(private rutas: Router,
              private pokemonService: PokemonService,
              private mensajes: MessageService ){
              }
              
  ngOnInit(): void {
     console.log('Se esta ejcutando el ngOnInit');
   
     this.pokemonService.getAllPokemon().subscribe(
      {
        next: (datos) => {
          console.log(datos);
          this.listPokemon = datos.results;
          this.mensajes.add({ severity: 'success', summary: 'Satisfactorio', detail: 'Exito' });
        },
        error: (err) => {
          console.log(err);
          this.mensajes.add({ severity: 'error', summary: 'Error', detail: 'Hubo un problema' });
        }
      }
     );
  }

}
