import { NgModule } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    aavegotchiLending: {
      cache: new InMemoryCache(),
      link: httpLink.create({
        uri: 'https://api.thegraph.com/subgraphs/name/froid1911/aavegotchi-lending',
      }),
    },
    aavegotchiEarnings: {
      cache: new InMemoryCache(),
      link: httpLink.create({
        uri: 'https://api.thegraph.com/subgraphs/name/sudeepb02/gotchi-lending',
      }),
    },
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
