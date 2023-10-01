import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, OnChanges {
  generos: string[] = ['PSX', 'Horror', 'Action', 'Adventure'];
  rating: string = '161%';

  ngOnInit(): void {
    console.log('Executado ao criar o Componente');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('Executado ao alterar o Componente');
  }
}
