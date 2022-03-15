import { Component } from '@angular/core';
import {map} from 'rxjs/operators';
import {Episodes, QueryGQL} from "./graphql";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-gql-angular-training';
  episodes : Episodes
  constructor(queryGQL: QueryGQL) {
    queryGQL.watch().valueChanges.pipe(
      map(result => result.data.episodes as Episodes)
    ).subscribe(result => {
      this.episodes = result;

    })
  }
}
