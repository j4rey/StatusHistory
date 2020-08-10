import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    console.log('getusers');
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users");
  }
}
