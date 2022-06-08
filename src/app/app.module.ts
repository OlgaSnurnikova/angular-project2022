import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Route, RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {MoviesListComponent} from './components/movies-list/movies-list.component';
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import {MainLayuotComponent} from './layouts/main-layuot/main-layuot.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MainInterceptor} from "./main.interceptor";
import {MovieInfoComponent} from './components/movie-info/movie-info.component';



const routes: Route[] = [
  {path: '', component: MainLayuotComponent},
  {path: 'movie', component: MoviesListComponent},
  {path: 'movie/:id', component: MovieInfoComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListComponent,
    MovieCardComponent,
    MainLayuotComponent,
    MovieInfoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
