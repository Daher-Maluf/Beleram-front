import { UserI } from './../../../compartido/modelos/user.interface';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

    public user: UserI = {
      email: "",
      password: ""
    }

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  auth(form){
    this._authService.login(this.user)
  }

}
