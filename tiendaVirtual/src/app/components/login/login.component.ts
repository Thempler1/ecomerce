import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cUser = "user";
  cPwd = "user";
  public alertUser!: string;
  public showAlert: boolean = false;

  constructor(private router: Router) { }

  user = new FormControl('');
  pwd = new FormControl('');
  
  ngOnInit(): void {
  }

  validar(){
    if(this.user.value == this.cUser && this.pwd.value == this.cPwd){
      this.alertUser = "";
      this.showAlert = false;
      this.router.navigate(['home']);
    }
    else{
      this.alertUser = "Usuario o password incorrecto";
      this.showAlert = true;
    }
  }
}
