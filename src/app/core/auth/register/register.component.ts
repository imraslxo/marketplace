import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountServiceService } from '../services/account-service.service';
import { AccountCredential } from '../model/account.credential';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  loginForm : FormGroup

  constructor(private _accountService: AccountServiceService, private router: Router){
    this.loginForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      password: new FormControl(null , [Validators.required]),
      email: new FormControl(null , [Validators.required,Validators.email])
    })
  }

  onSubmit(){
    this._accountService.regisration(this.loginForm.value as AccountCredential)
    this.router.navigate(["/main"])
  }

}
