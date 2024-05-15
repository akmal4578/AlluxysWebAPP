import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  errorMessage : string | undefined;
  loginForm: FormGroup;

  constructor(private router: Router){
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onLogin(): void {
    const { username, password } = this.loginForm.value;
    if(username == 'User' && password == 'Password'){
      this.router.navigate(['/home']);
    }
    else{
      this.errorMessage = 'Invalid Username and Password'
    }
  }
}
