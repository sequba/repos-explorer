import { Injectable } from '@angular/core';
import { Repo } from './repo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReposStoreService {

  constructor() { }

  getReposByUser$(user: string): Observable<string> {
    return of(`Repos owned by ${user}`);
  }
}
