import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName : string;
  lastName : string;
  title: string;
  ngOnInit() {
    this.firstName = 'Kevin';
    this.lastName = 'Pietersen';
  }
  getNameValues(firstName, lastName) {
    this.title = `${firstName} ${lastName}`; 
  }
}
