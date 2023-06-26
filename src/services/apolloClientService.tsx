import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const createApolloClient = () => {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const httpLink = new HttpLink({
    // uri: process.env.GRAPHQL_ENDPOINT || process.env.REACT_PUBLIC_GRAPHQL_ENDPOINT
    uri: "https://avocado.hasura.app/v1/graphql", // Server URL (must be absolute)
    headers: {
      "x-hasura-admin-secret":
        "jMOhNRW248jnx6I2gIYCRWHMCI2GcbEaT3CVNjiuJsWUgi0R3GgXs1x7UhEWdaZx",
    },
  });

  return new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
