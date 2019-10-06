import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   name = 'Furqan';
   city = 'Chishtian';
   interests = ['Badminton', ' Football', ' Books'];
  user = {
    name: 'Furqan',
    city: 'Chishtian',
    interests: ['Badminton', ' Football', ' Books']
  };
  constructor() {}

}
