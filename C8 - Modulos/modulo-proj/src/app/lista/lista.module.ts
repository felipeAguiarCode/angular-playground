import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ListViewComponent } from './list-view/list-view.component';



@NgModule({
  declarations: [
    InputComponent,
    ListViewComponent
  ],
  exports:[
    InputComponent,
    ListViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListaModule { }
