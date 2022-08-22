import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    CardComponent
  ],
  exports:[
    CardComponent
  ],

  imports: [
    CommonModule
  ]
})
export class PortifolioModule { }
