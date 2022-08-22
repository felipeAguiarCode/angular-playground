import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonData } from '../../models/pokemonData'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:PokemonData

  constructor(
    private service:PokemonService
  ) {

    this.pokemon = {
      id:0, name:'',
      sprites:{
        front_default: ''
      },types:[]
    }

  }


  ngOnInit(): void {
    this.getPokemon('pikachu')
  }


  getPokemon(searchName:string){
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) => {

          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }
        },
        error: (err) => console.log('not found')
      }
    )
  }


}
