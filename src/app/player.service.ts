import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_ADDRESS } from '../constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  public getNameValidation(name: string): Promise<string | boolean> {
    return this.http.get<string | boolean>(`${SERVER_ADDRESS}api/player/validate/${name}`).toPromise();
  }

  public sendPlayers(game: string, names: string[]): Observable<string> {
    return this.http.post<string>(`${SERVER_ADDRESS}api/player`, {game, names});
  }
}
