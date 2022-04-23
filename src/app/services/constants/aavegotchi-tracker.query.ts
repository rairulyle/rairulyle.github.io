import { gql } from 'apollo-angular';

export const GET_AAVEGOTCHI_LENDINGS = gql`
  mutation GotchiLendings($whitelistId: String!, $timeCreated_gte: Int!, $timeCreated_lt: Int!) {
    gotchiLendings(
      first: 1000
      orderBy: id
      where: {
        id_gt: 0
        cancelled: false
        timeAgreed_not: "0"
        whitelistId: $whitelistId
        timeCreated_gte: $timeCreated_gte
        timeCreated_lt: $timeCreated_lt
      }
    ) {
      id
      upfrontCost
      period
      tokensToShare
      gotchiTokenId
      gotchi {
        name
      }
      timeCreated
      timeAgreed
      lastClaimed
      completed
      lender
      borrower
      thirdPartyAddress
      splitOther
      splitBorrower
      splitOwner
      whitelistId
    }
  }
`;
