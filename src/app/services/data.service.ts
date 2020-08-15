import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  private url: string = 'https://jsonplaceholder.typicode.com';

  getContinentsData = () => {
    return this.http.get(`${this.url}/posts`);
  };

  getCitiesData = () => {
    return this.http.get(`${this.url}/todos`);
  };
}
