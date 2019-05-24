import Countries from './Countries';
import React from 'react';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com"
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="https://countries.trevorblades.com"><h1>Pencarian Negara</h1></a>
      </nav>
      <div>
        <Countries />
      </div>
    </div>
  </ApolloProvider>
);




export default App;
