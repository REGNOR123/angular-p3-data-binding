import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameterized-pipes',
  templateUrl: './parameterized-pipes.component.html',
  styleUrls: ['./parameterized-pipes.component.scss']
})
export class ParameterizedPipesComponent {


  employee = {
    id : 1,
    name : 'amit Kumar',
    dob : '05/05/2000',
    slary : 56651
  }

}
