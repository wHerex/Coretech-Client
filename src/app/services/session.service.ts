import {HttpClient, HttpHeaders, HttpResponse, HttpResponseBase} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

interface LoginDTO {
  username: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {


  constructor(private http: HttpClient) {
  }

  public login(loginDTO: LoginDTO): Observable<LoginResponse> {
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    };
    const val = this.http.post<LoginResponse>(
      `http://localhost:8080/login`,
      encodeURI(`username=${loginDTO.username}&password=${loginDTO.password}`),
      options
    );
    val.subscribe(
      v => localStorage.setItem('token', v.accessToken)
    );
    return val;
  }
}
