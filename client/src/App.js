import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import AddMember from "./components/AddMember";
import ListMembers from "./components/ListMembers";
import UpdateMember from "./components/UpdateMember";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ListMembers />
      <AddMember />
      <UpdateMember />
    </ApolloProvider>
  );
};

export default App;
