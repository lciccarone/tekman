import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private configurationSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public configuration$: Observable<boolean> = this.configurationSubject.asObservable();

  public toggleConfiguration(isOpen: boolean): void {
    this.configurationSubject.next(isOpen);
  }
}
