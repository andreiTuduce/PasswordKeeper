import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SessionStateStorageService } from "../../core/services/session-state-storage";

import { UserLogin, UserRegister } from "../login.model";

import { UserService } from "../user.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private sessionStorageService: SessionStateStorageService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.loginForm.valid) {
      const userLogin = <UserLogin>{
        username: this.loginForm.get("username").value,
        password: this.loginForm.get("password").value
      }

      this.userService.loadUser(userLogin).subscribe((result: UserRegister) => {
        this.sessionStorageService.setItem("user", result);
      });
    }
  }
}