export interface AavegotchiLending {
  id: string;
  upfrontCost: string;
  period: string;
  tokensToShare: string[];
  gotchiTokenId: string;
  gotchi: Gotchi;
  timeCreated: string;
  timeAgreed: string;
  lastClaimed: string;
  completed: boolean;
  lender: string;
  borrower: string;
  thirdPartyAddress: string;
  splitOther: string;
  splitBorrower: string;
  splitOwner: string;
  whitelistId: string;
}

export interface AavegotchiLendingPayload {
  whitelistId: string;
  timeCreated_gte: number;
  timeCreated_lt: number;
}

interface Gotchi {
  name: string;
}

export interface AavegotchiEarnings {
  id: string;
  actualPeriod: string;
  endTimestamp: string;
  claimedFUD: string;
  claimedFOMO: string;
  claimedALPHA: string;
  claimedKEK: string;
}

export interface AavegotchiLendingEarnings extends AavegotchiLending {
  earnings?: AavegotchiEarnings;
}

export interface AavegotchiCoinPrice {
  aavegotchi: CoinCurrency;
  'aavegotchi-alpha': CoinCurrency;
  'aavegotchi-fomo': CoinCurrency;
  'aavegotchi-fud': CoinCurrency;
  'aavegotchi-kek': CoinCurrency;
}

interface CoinCurrency {
  php: number;
  usd: number;
}
