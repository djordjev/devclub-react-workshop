import { gql } from "apollo-boost";

export default gql`
  query {
    allMembers {
      id
      name
      position
    }
  }
`;
