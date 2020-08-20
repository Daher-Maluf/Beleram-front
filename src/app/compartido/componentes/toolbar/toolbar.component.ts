import { AuthService } from './../../../componentes/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  providers: [AuthService]
})
export class ToolbarComponent implements OnInit {

  public status: boolean;

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.status = this._authService.verifyLogin()
  }

}
