import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AdminFull } from '../models/admin-full.model';
import { AdminLogin } from '../models/admin-login.model';

/**
 * Component that handles the login page and form validation. Template changes
 * based on if the user is logged in or not.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  createAdmin = new AdminFull('', '', '', '');
  createForm: FormGroup;
  errorModal: object = {
    errorTitle: 'Error',
    errorText: 'Please fill in correct credentials'
  }
  visibility = true;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  /**
   * Used for validating the form that is connected to our input fields.
   * FormGroup is used to create an instance of our form element that tracks all values.
   * The FormControlName login connects our validators with the input element.
   */
  ngOnInit() {
    this.createForm = this.formBuilder.group({
      firstName: ['', [
        Validators.required,
      ]
      ],
      lastName: ['', [
        Validators.required,
      ]
      ],
      email: ['', [
        Validators.required,
        Validators.email
      ]
      ],
      password: ['', [
        Validators.required,
        Validators.minLength(10)
      ]
      ],
    })
  }

  /**
  * Creates a new object with the value of our login form fields and checks if the user exists
  * in our list of admins in the authService. If both the value of our email property and the
  * password property is found within the same object in the admins list it will login and navigate
  * to the dashboard.
  */
  login(): void {
    new AdminLogin(this.email.value, this.password.value);
    if (this.authService.admins.find(user => user.email == this.email.value && user.password == this.password.value)) {
      this.authService.login(this.email.value);
      this.router.navigate(['dashboard']);
    }
  }

  /**
  * Creates a new object with the value of our form and adds the object
  * to our list of admins in the authService.
  */
  onSubmit(): void {
    this.createAdmin = this.createForm.value;
    this.authService.admins.push(this.createAdmin);
  }


  /**
  * Used for toggling the visibility of our buttons and input fields when switching
  * between logging in and creating a new admin.
  */
  toggleVisibility(): void {
    this.visibility = !this.visibility;
  }

  /**
  * Getter for easier access to our email form field.
  */
  get email() {
    return this.createForm.get('email');
  }

  /**
  * Getter for easier access to our password form field.
  */
  get password() {
    return this.createForm.get('password');
  }
}
