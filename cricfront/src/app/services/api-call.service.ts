import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private _httpClient:HttpClient) { }
  getAllMatches(){
    return this._httpClient.get("https://cricapi.com/api/matches?apikey=2a0c1d4b-3f8e-4b5c-9a7f-6d0e2f1a3b8c")
  }

  getLiveMatches(){
    return this._httpClient.get("https://cricapi.com/api/liveMatches?apikey=2a0c1d4b-3f8e-4b5c-9a7f-6d0e2f1a3b8c")
  }
  getMatchHistory(){
    return this._httpClient.get("https://cricapi.com/api/matchHistory?apikey=2a0c1d4b-3f8e-4b5c-9a7f-6d0e2f1a3b8c")
  }
  getPointTable(){
    return this._httpClient.get("https://cricapi.com/api/pointTable?apikey=2a0c1d4b-3f8e-4b5c-9a7f-6d0e2f1a3b8c")
  }
}
