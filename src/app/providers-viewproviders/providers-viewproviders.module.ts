import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { InspectorComponent } from './inspector/inspector.component';
import { AnimalService } from './animal.service';
import { FlowerService } from './flower.service';



@NgModule({
  declarations: [
    ChildComponent,
    InspectorComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    AnimalService,
    FlowerService
  ],
  exports:[
    ChildComponent,
    InspectorComponent
  ]
})
export class ProvidersViewprovidersModule { }
