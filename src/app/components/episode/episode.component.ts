import {Component, Input, OnInit} from '@angular/core';
import {Episode, Maybe} from "../../graphql";

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  @Input() episode: Maybe<Episode>;
  constructor() { }

  ngOnInit(): void {
  }

}
