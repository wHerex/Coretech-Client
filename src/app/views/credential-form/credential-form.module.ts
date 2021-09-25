import {CredentialFormComponent} from './credential-form.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [CredentialFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    TranslateModule,
  ],
  exports: [CredentialFormComponent]
})
export class CredentialsFormModule {
}
