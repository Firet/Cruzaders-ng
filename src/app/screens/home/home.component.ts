import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userDecode: UserDecode = {};
  
  constructor() { }
  
  ngOnInit(): void {
    const idToken = localStorage.getItem('id_token') || '';
    this.userDecode = jwt_decode(idToken);
    console.log('userDecode', this.userDecode);
  }

}

interface UserDecode {
  id?: number,
  firstname?: string,
  lastname?: string,
  document_code?: number,
  area_code?: number,
  document_number?: number,
  cellphone?: number,
  phone?: number,
  email?: string,
  city_id?: number,
  role_code?: number,
  status?: number,
  iat?: number,
  exp?: number
}