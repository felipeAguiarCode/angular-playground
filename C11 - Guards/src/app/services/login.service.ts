import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  doLogin(){
    localStorage.setItem('token', 'fdsfkl12312')
  }

  doLogout(){
    localStorage.clear()
  }

}
