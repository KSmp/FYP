import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.scss']
})
export class LoginComponent implements OnInit {
  readonly environment = environment
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) { 
    this.authService.redirectIfLoggedIn()
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (!this.form.valid) return

    this.authService.login(this.form.value)
  }
}
