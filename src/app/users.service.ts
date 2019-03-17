import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
* Component used for making HTTP request to JSONPlaceholder.
*/
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  /**
   * Returns an observable with JSON data that we get from making a HTTP GET request to JSONPlaceholder.
   */
  getUsers() {
    return this.http.get(this.url);
  }

  /**
   * The observable we get back in this method is based on the value of the parameter usedId
   * which in this case is the route parameter named id in the SingleUserComponent.
   */
  getUser(userId) {
    return this.http.get(this.url + "/" + userId);
  }
}
