import { Component, inject, signal } from '@angular/core';
import type { FormGroup } from '@angular/forms';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserModel } from '../shared/models/user.model';
import { ParseService } from '../shared/services/parse.service';

interface IForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCard,
    MatCardHeader,
    MatCardAvatar,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatInput,
    MatError,
    MatCardActions,
    MatButton,
  ],
})
export class LoginComponent {
  loginForm: FormGroup<IForm>;

  currentUser = signal<UserModel | undefined>(UserModel.current());

  #formBuilder = inject(FormBuilder);
  #parseService = inject(ParseService);
  #snackBar = inject(MatSnackBar);

  constructor() {
    this.loginForm = this.#formBuilder.group<IForm>({
      email: new FormControl<string>('', {
        validators: [Validators.required, Validators.email],
        nonNullable: true,
      }),
      password: new FormControl<string>('', {
        validators: [Validators.required, Validators.minLength(6)],
        nonNullable: true,
      }),
    });
  }

  async onSubmit(): Promise<void> {
    if (!this.loginForm.valid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    try {
      const user = await this.#parseService.login(email ?? '', password ?? '');
      this.currentUser.set(user);
      this.showSnackBar('Login success!');
    } catch (error) {
      this.currentUser.set(undefined);
      this.showSnackBar(`Error: ${error}`);
    }
  }

  async logout(): Promise<void> {
    try {
      await this.#parseService.logout();
      this.showSnackBar('Logout success!');
    } catch (error) {
      this.showSnackBar(`Error: ${error}`);
    }
    this.currentUser.set(undefined);
  }

  private showSnackBar(message: string): void {
    this.#snackBar.open(message, undefined, {
      duration: 2000,
    });
  }
}
