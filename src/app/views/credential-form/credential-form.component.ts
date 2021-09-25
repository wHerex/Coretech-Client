import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-credentials-form',
  templateUrl: './credential-form.component.html',
  styleUrls: ['./credential-form.component.scss']
})
export class CredentialFormComponent implements OnInit {

  form: FormGroup;

  isPasswordVisible = false;

  visibilityIcon = 'visibility';

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.buildForm();
  }

  get email(): string {
    return this.form.get('email').value as string;
  }

  get password(): string {
    return this.form.get('password').value as string;
  }

  get isValid(): boolean {
    return this.form.valid;
  }

  showPassword(): void {
    this.isPasswordVisible = true;
    this.setVisibilityIcon();
  }

  hidePassword(): void {
    this.isPasswordVisible = false;
    this.setVisibilityIcon();
  }

  setVisibilityIcon(): void {
    this.visibilityIcon = this.isPasswordVisible ? 'visibility_off' : 'visibility';
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

}
