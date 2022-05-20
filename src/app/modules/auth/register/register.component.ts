import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.scss']
})
export class RegisterComponent implements OnInit {
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
      login: ['', [Validators.required, Validators.pattern(/^([a-z]|[A-Z])+([a-z]|[A-Z]|[0-9])*$/), Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/)]],
    });
  }

  onSubmit(): void {
    if (!this.form.valid) return

    this.authService.register(this.form.value)
  }
}
