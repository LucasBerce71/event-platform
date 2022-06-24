import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rlvbiy1aid01z3bckybk6e/master',
  cache: new InMemoryCache(),
})