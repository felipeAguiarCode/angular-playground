import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: LoginService
  ) { }

  ngOnInit(): void {
  }

  logar(){
    this.service.doLogin()
  }

  deslogar(){
    this.service.doLogout()
  }

}
