import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { ParameterizedPipesComponent } from './parameterized-pipes/parameterized-pipes.component';
import { ChainingPipesComponent } from './chaining-pipes/chaining-pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';



@NgModule({
  declarations: [BuiltInPipesComponent, ParameterizedPipesComponent, ChainingPipesComponent, CustomPipesComponent],
  imports: [
    CommonModule
  ],
  exports: [BuiltInPipesComponent, ParameterizedPipesComponent, ChainingPipesComponent, CustomPipesComponent]
})
export class PipesModule { }
