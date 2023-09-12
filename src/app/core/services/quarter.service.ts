import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Quarter } from '../models/quarter';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuarterService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  public getQuarters(course?: number, id?: number): Observable<Quarter[]> {
    let httpParams = new HttpParams();
    if (course) {
      httpParams = httpParams.set('course', course);
    }
    if (id) {
      httpParams = httpParams.set('id', id);
    }
    const urlTree = this.router.createUrlTree([`${this.apiUrl}/quarters`]);
    return this.http.get(`${urlTree}`, { params: httpParams }) as Observable<Quarter[]>;
  }
}
