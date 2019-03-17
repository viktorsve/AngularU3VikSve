import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

/**
 * Component used for assigning and displaying seperate user pages.
 */
@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  user: string;
  userObject: object;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  /**
   * Sets the user property to the current value of the route parameter named id.
   * Sends the route parameter as an argument to the getUser method in our UsersService
   * and subscribes to the observable that is returned.
   */
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = params.id;
    })
    return this.usersService.getUser(this.user)
      .subscribe(data => this.userObject = data);
  }
}
