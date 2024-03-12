import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userInput1: string = ''; // Variable to hold user input

  userInput!: number; // Variable to hold user input
}
