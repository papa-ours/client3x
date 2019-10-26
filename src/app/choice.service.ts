import { Injectable } from '@angular/core';
import { SERVER_ADDRESS } from 'src/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Turn } from './turn';
import { Choice } from './choice';

@Injectable({
  providedIn: 'root'
})
export class ChoiceService {

  constructor(private http: HttpClient) { }

  public sendParameters(
    key: string,
    numberOfChoices: number,
    numberOfBlocks: number
  ): Observable<string | boolean> {
    return this.http.post<string | boolean>(
      `${SERVER_ADDRESS}api/params/`,
      {key, numberOfChoices, numberOfBlocks},
    );
  }

  public getNextTurn(key: string): Observable<Turn> {
    return this.http.get<Turn>(`${SERVER_ADDRESS}api/random/player/${key}`);
  }

  public getResults(key: string): Observable<Map<string, string>> {
    return this.http.get<Map<string, string>>(`${SERVER_ADDRESS}api/results/${key}`);
  }

  public block(key: string, choiceNames: string[]): Observable<string | void> {
    return this.http.post<string | void>(`${SERVER_ADDRESS}api/block`, {key, choiceNames});
  }

  public pick(key: string, playerName: string, choiceName: string): Observable<string | void> {
    return this.http.post<string | void>(`${SERVER_ADDRESS}api/pick`, {key, playerName, choiceName});
  }

  public getPlayerChoices(key: string, playerName: string): Observable<Choice[] | void> {
    return this.http.get<Choice[] | void>(`${SERVER_ADDRESS}api/player/choices/${key}/${playerName}`);
  }
}
