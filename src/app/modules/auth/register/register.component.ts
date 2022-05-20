import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  readonly environment = environment
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
  ) { 
    this.authService.redirectIfLoggedIn()
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^([a-z]|[A-Z])+([a-z]|[A-Z]|[0-9])*$/), Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/)]],
    });
  }

  ngOnDestroy(): void {
    this.authService.usubscribeFromRedirection()
  }

  onSubmit(): void {
    if (!this.form.valid) return

    this.authService.register(this.form.value)
    this.snackBar.open('Trying to register, this can take a while...', '', {
      duration: 2500
    });
  }
}
