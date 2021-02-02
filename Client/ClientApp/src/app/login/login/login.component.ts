import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { LoginService } from "../core/login.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: '',
    });
  }

  onClick() {
    this.loginService.getUser().subscribe(result => {
      console.log(result);
    });
  }
}
