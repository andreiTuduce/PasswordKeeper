import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { UserProfile } from "../login.model";

import { UserService } from "../user.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.loginForm.valid) {
      const userProfile = <UserProfile>{
        username: this.loginForm.get("username").value,
        password: this.loginForm.get("password").value
      }

      this.userService.saveUser(userProfile).subscribe(result => {
        console.log(result);
      });
    }
  }
}