import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';

import client from './apollo';
import Scenes from './Scenes';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Scenes />
      </ApolloProvider>
    );
  }
}
