import { Component } from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit(){

    var typed = new Typed('.hello-text', {
      strings: ["^1000hello"],
      typeSpeed: 100,
      showCursor: false,
      cursorChar: '|',
    });  

    var typed = new Typed('.element', {
      strings: ["^1500 I am Abhishek Kumar."],
      typeSpeed: 100,
      showCursor: false,
    });  
  }
}
