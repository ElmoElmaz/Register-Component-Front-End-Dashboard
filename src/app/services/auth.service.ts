import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://ztt0j6j0x8.execute-api.us-east-1.amazonaws.com/dev';
  
  constructor(private http: HttpClient)  {}


  register(firstName: string, lastName: string, email: string , phoneNumber: string , password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, { firstName, lastName, email , phoneNumber , password });
  }
}
