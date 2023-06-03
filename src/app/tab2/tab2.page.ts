import { Component } from '@angular/core';
import { MoviesService } from '../theMovieDB/movies.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [MoviesService],
})
export class Tab2Page {

  public lista_filmes = new Array<any>();
  public page: number = 1;

  constructor(public movieService: MoviesService, private loadingController: LoadingController) { }

  ionViewDidEnter() {
    this.efeitoLoading();
    this.carregaPagina();
  }

  carregaPagina() {
    this.movieService.getPopularMovies(this.page, 'pt-BR').subscribe(
      (data) => {
        const response = data as any;
        if (this.page == 1) {
          this.lista_filmes = response.results;
        } else {
          this.lista_filmes = this.lista_filmes.concat(response.results);
        }
        console.log(this.lista_filmes);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  async efeitoLoading() {
    const loading = await this.loadingController.create({
      message: 'Carregando Filmes',
      duration: 1000,
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  efeitoRefresh(event: any) {
    this.page = 1;
    this.carregaPagina();
    console.log('Iniciando operação assincrona');

    setTimeout(() => {
      event.target.complete();
      console.log('finalizando refresh');
    }, 500);
  }

  efeitoScrollInfinito(ev: any) {
    this.page++;
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
      this.carregaPagina();
    }, 1000);
  }

}
