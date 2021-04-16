import { gql } from "apollo-boost";

export default gql`
  mutation addMember($name: String!, $position: String!) {
    addMember(name: $name, position: $position) {
      id
      name
      position
    }
  }
`;
