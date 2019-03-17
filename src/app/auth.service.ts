import { Injectable } from '@angular/core';
import { AdminFull } from './models/admin-full.model'

/**
* Used for handling localStorage. Also checks if a user is logged in and contains a list of all
* admins.
*/
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser: string;
  public admins: AdminFull[] = [{
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    password: "1234567890"
  }, {
    firstName: "Kylie",
    lastName: "Johnson",
    email: "kylie.johnson@email.com",
    password: "0987654321"
  }];

  constructor() { }

  /**
   * Returns the key value of the user item.
   */
  checkIfLoggedIn() {
    return localStorage.getItem("user");
  }

  /**
   * Creates a user item and sets the key value to the user parameter and sets the loggedUser
   * property to the user parameter.
   */
  login(user) {
    localStorage.setItem("user", user);
    this.loggedUser = user;
  }

  /**
   * Clears all items from the localStorage and sets the loggedUser property to
   * undefined.
   */
  logout() {
    localStorage.clear();
    this.loggedUser = undefined;
  }
}
