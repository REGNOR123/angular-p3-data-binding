import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-p3-data-binding';
  name= 'Amit Kumar';
  User = [{id:1, name:'xysfd'},{id:2, name:'ghfch'},{id:3, name:'miisn'},{id:4, name:'csdvt'}];
  colorValue = 'green';
  placeholderValue = 'Enter the UserName';
  refrenceLink ='https://www.linkedin.com';
  carrersite= 'https://www.google.com/';

  handleClick() {
    alert("I have been Clicked");
  }
  showValue(data){
    alert("The Number Is : " + data);
  }
}
