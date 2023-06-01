import { Component } from '@angular/core';
import { configFromSession } from '@ionic/core/dist/types/global/config';
import { MoviesService } from '../theMovieDB/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [MoviesService],
})
export class Tab2Page {
  public objetoFeed = {
    subtitulo: 'subtitulo',
    titulo: 'titulo',
    conteudo: 'conteudo',
    imagem: 'https://docs-demo.ionic.io/assets/madison.jpg',
  };

  constructor(public movieService: MoviesService) {}

  public lista_filmes = new Array<any>();
  public page: number = 1;

  carregaPagina() {
    this.movieService.getPopularMovies(1, 'pt-BR').subscribe(
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
  /*
  async efeitoLoading() {
    const loading = await this.loadingController.create({
      message: 'Carregando Filmes',
      duration: 1000,
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }
  */
  efeitoRefresh(event: any) {
    this.page = 1;
    this.carregaPagina();
    console.log('Iniciando operação assincrona');

    setTimeout(() => {
      event.target.complete();
      console.log('finalizando refresh');
    }, 500);
  }

  ionViewDidEnter() {
    //this.efeitoLoading();
    this.carregaPagina();
  }
}
