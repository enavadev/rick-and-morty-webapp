import generateGraphqlSagaClient from 'graphql-saga-client';

const sagaClient = generateGraphqlSagaClient({
  url: process.env.REACT_APP_RICK_MORTY_API_URL,
});

export default sagaClient;