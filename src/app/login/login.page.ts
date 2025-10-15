import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, RouterModule]
})
export class LoginPage implements OnInit {

  auth = inject(AuthService)
  router = inject(Router)
  // myForm: FormGroup;
  login: FormGroup;

  fb = inject(FormBuilder)
  constructor() {
    this.login = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]]

    })


  }
  onLogin() {
    if (this.login.valid) {
      console.log('Form submitted:', this.login.value);
      this.auth.login(this.login.value)
    }
  }








  ngOnInit() {
  }
}
