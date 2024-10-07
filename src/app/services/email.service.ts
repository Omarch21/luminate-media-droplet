import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }
  public sendEmail(email: Email){
    return this.http.post<Email>("https://luminate-media-backend-zdioojniha-uc.a.run.app/api/email",email);
  }
}
