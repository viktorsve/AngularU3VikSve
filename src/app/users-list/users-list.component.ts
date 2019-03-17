import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

/**
 * Takes the userlist as an input and sends each array item down to the
 * UserListItemComponent and generates the text color that is used in the UserListItemComponent.
 */
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: object;
  switchColor: false;

  constructor(private usersService: UsersService) { }

  /**
   * Runs the getUser() method and subscribes to the observable that is returned.
   */
  ngOnInit() {
    return this.usersService.getUsers()
      .subscribe(data => this.users = data);
  }

  /**
   * Method that switches between two return values based on a boolean value that
   * changes every time the toggle button is clicked.
   */
  getColor() {
    if (this.switchColor) {
      return "green";
    } else {
      return "red";
    }
  }
}
