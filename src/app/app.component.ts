import { Component } from '@angular/core';

export class RequestData {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>{{request_data.name}} details!</h2>
    <div><label>id: </label>{{request_data.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="request_data.name" placeholder="name">
    </div>
    `
})
export class AppComponent {
  title = 'Zatanna - API Validator';
  request_data: RequestData = {
    id: 1,
    name: 'Test'
  };
}
