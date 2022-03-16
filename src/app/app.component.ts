import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {map} from 'rxjs/operators';
import {Episodes, EpisodeGQL, Maybe} from "./graphql";
import {EPISODE_QUERY} from "./graphql/queries";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('seasonInput') seasonInput: ElementRef;
  episodes : Episodes;
  loading = false;
  pages = [1];

  constructor(private episodeGQL: EpisodeGQL) {
    this.callEpisodeQuery(1);
  }

  callEpisodeQuery(page: number | string) {

    this.episodeGQL.watch({
      page: +page,
    }).valueChanges.pipe(
      map(result => result.data.episodes as Episodes)
    ).subscribe(episodes => {
      this.episodes = episodes;
      this.pages = Array.from(Array(episodes.info?.pages).keys()).map(i => i + 1);
    });
  }


}
