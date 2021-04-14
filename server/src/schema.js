const { gql } = require("apollo-server");

const typeDefs = gql`
  type DevClubMember {
    id: Int!
    name: String!
    position: String!
  }

  type Query {
    allMembers: [DevClubMember!]
  }

  type Mutation {
    addMember(name: String, position: String): DevClubMember!
    updateMember(id: Int!, name: String, position: String!): DevClubMember!
    deleteMember(id: Int!): DevClubMember!
  }
`;

module.exports = typeDefs;
