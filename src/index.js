import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, HttpLink, InMemoryCache, ApolloProvider} from '@apollo/client';

/* Creating a new ApolloClient with a cache and a link. */
const client = new ApolloClient({

  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql'
  })

})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
/* Wrapping the App component with the ApolloProvider component. */
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
