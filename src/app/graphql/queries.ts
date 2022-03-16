import {gql} from "apollo-angular";

export const EPISODE_QUERY = gql`
  query Episode($page: Int) {
  episodes(page: $page) {
    info {
      prev
      pages
      next
      count
    }
    results {
      name
      id
      episode
      air_date
    }
  }
}
`;
