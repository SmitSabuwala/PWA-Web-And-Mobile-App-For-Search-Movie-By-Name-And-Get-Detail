import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(private service: MoviesService,
    private ativatedRoute: ActivatedRoute) { }
  movie: any
  ngOnInit() {
    this.ativatedRoute.params
      .subscribe(params => {
        let id = params['imdbID'];
        this.service.getMovieDetails(id)
          .subscribe(resp => this.movie = resp);
      });
  }
  goBack() {
    window.history.back();
  }

}
