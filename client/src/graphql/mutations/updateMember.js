import { gql } from "apollo-boost";

export default gql`
  mutation updateMember($id: Int!, $name: String!, $position: String!) {
    updateMember(id: $id, name: $name, position: $position) {
      id
      name
      position
    }
  }
`;
