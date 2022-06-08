import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {IMovieInfo} from "../../interfaces";
import {MovieInfoService} from "../../services/movie-info.service";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  movieInfo: IMovieInfo

  constructor(private activateRoute: ActivatedRoute, private router: Router, private movieInfoService: MovieInfoService) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({id}) => {
      const state = history.state['movie'] as IMovieInfo;
      this.movieInfo=state
    })
  }
}

