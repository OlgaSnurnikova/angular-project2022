import {Component, OnInit} from '@angular/core';
import {IMovie} from "../../interfaces";
import {MovieService} from "../../services";
import {ActivatedRoute, Params, Router} from "@angular/router";


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: IMovie[];
  currentPage: number = 1;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.movieService.getAllMovies(1).subscribe(({results}) => this.movies = results)
    this.activatedRoute.queryParams.subscribe((params: Params): void => {
      this.currentPage = +params['page'] ? +params['page'] : 1;
    });


  }

  pageNext(page: number): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        page: this.currentPage + 1,
      },
      queryParamsHandling: 'merge',
    }).then(page => this.movieService.getAllMovies(this.currentPage).subscribe(({results}) => this.movies = results))
  }

  pageFirst(page: number): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        page: this.currentPage = 1,
      },
      queryParamsHandling: 'merge',
    }).then(page => this.movieService.getAllMovies(this.currentPage).subscribe(({results}) => this.movies = results))
  }
  pagePrev(page: number): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        page: this.currentPage - 1,
      },
      queryParamsHandling: 'merge',
    }).then(page => this.movieService.getAllMovies(this.currentPage).subscribe(({results}) => this.movies = results))
  }
}
