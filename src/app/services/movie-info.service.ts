import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {urls} from "../constants";
import {HttpClient} from "@angular/common/http";
import {IMovieInfo} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class MovieInfoService {

  constructor(private httpClient:HttpClient) { }

  getMovieInfo(id:string): Observable<IMovieInfo> {
   return this.httpClient.get<IMovieInfo>(`${urls.movie}/${id}`);
  }
}
