import { gql } from "apollo-boost";

export default gql`
  mutation deleteMember($id: Int!) {
    deleteMember(id: $id) {
      id
      name
      position
    }
  }
`;
