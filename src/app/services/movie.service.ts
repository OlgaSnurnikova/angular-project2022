import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../constants";



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getAllMovies(page:number): Observable<any> {
    // return this.httpClient.get<any>(urls.movie);
   return this.httpClient.get<any>(urls.movie + '?page=' + page);
  }
}



