import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { UserRegister } from "../login.model";

import { UserService } from "../user.service";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  submitForm() {
    const password = this.registerForm.get("password").value;
    const confirmPassword = this.registerForm.get("confirmPassword").value;

    if (this.registerForm.valid && password === confirmPassword) {
      const userRegister = <UserRegister>{
        username: this.registerForm.get("username").value,
        password: password,
        email: this.registerForm.get("email").value,
      }

      this.userService.saveUser(userRegister).subscribe(result => {
        console.log(result);
      });
    }
  }
}