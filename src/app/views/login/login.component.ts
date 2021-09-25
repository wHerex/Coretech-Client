import {Component, ViewChild} from '@angular/core';
import {CredentialFormComponent} from '../credential-form/credential-form.component';
import {SessionService} from '../../services/session.service';
import {AuthService} from '../../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';


interface LoginDTO {
  username: string;
  password: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('form')
  form: CredentialFormComponent;

  constructor(private sessionService: SessionService,
              private authService: AuthService,
              private snackbar: MatSnackBar,
              private router: Router
  ) {}
  login(): void {
    const bar: LoginDTO = { username: this.form.email, password: this.form.password};

    this.sessionService.login(bar).subscribe(
      (user) => {
        this.snackbar.open('Zalogowano!', '', {duration: 3000});

        this.router.navigate(['products']);
      },
      (() => {
        this.snackbar.open('Ups!', '', {duration: 3000});
      })
    );
  }
}
