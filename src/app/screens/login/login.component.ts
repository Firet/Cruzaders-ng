import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private loginService: LoginService) {}

  login() {
    //console.log(this.formLogin.value);
    this.loginService
      .loginAuth({
        email: this.formLogin.value.email,
        password: this.formLogin.value.password,
      })
      .subscribe(res => {
        res
      } );
  }

  ngOnInit(): void {}
}
