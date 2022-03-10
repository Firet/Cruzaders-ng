import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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

  wrongCredential = false;
  isLoading = false;

  constructor(private loginService: LoginService, private route: Router) {}

  login() {
    this.isLoading = true;
    this.loginService
      .loginAuth({
        email: this.formLogin.value.email,
        password: this.formLogin.value.password,
      })
      .subscribe({
        next: () => {
          this.wrongCredential = false;
          this.route.navigate(['/home']);
          this.isLoading = false;
        },
        error: (error: HttpErrorResponse) => {
          this.wrongCredential = true;
          console.log('error', error);
          this.isLoading = false;
        },
      });
  }

  ngOnInit(): void {}
}
