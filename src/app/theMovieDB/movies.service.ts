import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private chave = '6462f9dfc9eb5431452f30cd9a1e6120';
  private caminhoPadrao = 'https://api.themoviedb.org/3';

  constructor(public http: HttpClient) {}

  public getPopularMovies(page = 1, language = 'eng') {
    let filmes = `${this.caminhoPadrao}/movie/popular?page=${page}&language=${language}&api_key=${this.chave}`;
    return this.http.get(filmes);
  }
}
