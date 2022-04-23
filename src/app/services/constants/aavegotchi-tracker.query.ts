import { gql } from 'apollo-angular';

export const GET_AAVEGOTCHI_LENDINGS = gql`
  query gotchiLendings(
    first: 1000
    orderBy: id
    where: {id_gt: 0, cancelled: false, timeAgreed_not: "0", whitelistId: "4194", timeCreated_gte: 1650643200, timeCreated_lt: 1650729600}
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
`;
