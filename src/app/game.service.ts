import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from './game';
import { SERVER_ADDRESS } from '../constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  public getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${SERVER_ADDRESS}api/games`);
  }

  public getGame(gameName: string): Observable<Game> {
    return this.http.get<Game>(`${SERVER_ADDRESS}api/game/${gameName}`);
  }
}
