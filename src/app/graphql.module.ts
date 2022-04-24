import { NgModule } from '@angular/core';
import { InMemoryCache } from '@apollo/client/core';
import { ApolloModule, APOLLO_NAMED_OPTIONS, NamedOptions } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

export function createApollo(httpLink: HttpLink): NamedOptions {
  return {
    aavegotchiLendings: {
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
  imports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
