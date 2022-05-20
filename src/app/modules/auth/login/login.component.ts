import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  readonly environment = environment
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    this.authService.redirectIfLoggedIn()
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnDestroy(): void {
    this.authService.usubscribeFromRedirection()
  }

  onSubmit(): void {
    if (!this.form.valid) return

    this.authService.login(this.form.value)
  }
}
