import React from "react";

import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

const items = gql`
  query {
    items {
      id
    }
  }
`;

function App() {
  return <div className="App">oi {items} tchau</div>;
}

export default App;
