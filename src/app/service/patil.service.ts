import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nick } from '../models/nick.module'; // Correct path to nick.module.ts

@Injectable({
  providedIn: 'root',
})
export class PatilService { // Updated service name
  private apiUrl = 'your-api-url'; // Set your API URL here

  constructor(private http: HttpClient) {}

  getNicks(): Observable<Nick[]> { // Updated method and type
    return this.http.get<Nick[]>(this.apiUrl + '/nicks'); // Adjust API endpoint
  }

  addNick(nick: Nick): Observable<Nick> { // Updated method and type
    return this.http.post<Nick>(this.apiUrl + '/nicks', nick); // Adjust API endpoint
  }
}

