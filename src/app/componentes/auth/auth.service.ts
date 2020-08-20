import { UserI } from './../../compartido/modelos/user.interface';
import { Injectable } from '@angular/core';
import { WebService } from "../../web.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private url: string = "http://localhost:2000/";

  constructor(
    private _router: Router,
    private _webService: WebService
  ) { }

  login(user: UserI){
      this._webService.postObject("login", {email: user.email, password: user.password})
      .subscribe(
        (result: any) => {
          console.log(result);
          if(result.auth == false && result.token == null){
            this._router.navigate(['login']);
          } else {
            this._router.navigate(['admin']);
            localStorage.setItem("auth_token", result.token);
          }
        }
      );
  }

  logout(){
    localStorage.removeItem("auth_token");
  }

  verifyLogin(): boolean{
     if(localStorage.getItem("auth_token")){
      return true
    } else{
      return false
    }
  }

}
