//import { graphql } from "react-apollo";
import gql from "graphql-tag";
//import { gql } from "apollo-boost";

export const ALL_PERSONAJES = gql`
  query allCharacters($pag: Int) {
    characters(page: $pag) {
      results {
        id
        name
        image
        status
        species
        gender
        location {
          name
        }
        origin {
          name
        }
      }
    }
  }
`;
