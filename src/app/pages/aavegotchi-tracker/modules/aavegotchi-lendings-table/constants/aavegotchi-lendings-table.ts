import { AAVEGOTCHI_COIN } from '@app/services/models';

import { AavegotchiLendingsTableColumn } from '../models';

export const AAVEGOTCHI_LENDINGS_TABLES_COLUMNS: AavegotchiLendingsTableColumn[] = [
  {
    header: 'Lending ID',
    value: 'gotchiTokenId',
  },
  {
    header: 'Gotchi',
    value: 'gotchiName',
  },
  {
    header: 'Borrower Metamask',
    value: 'borrower',
  },
  {
    header: 'Rent Time',
    value: 'timeCreated',
  },
  {
    header: 'FUD',
    value: 'claimedFUD',
  },
  {
    header: 'FOMO',
    value: 'claimedFOMO',
  },
  {
    header: 'ALPHA',
    value: 'claimedALPHA',
  },
  {
    header: 'KEK',
    value: 'claimedKEK',
  },
  {
    header: 'Borrower',
    value: 'splitBorrower',
  },
  {
    header: 'Owner',
    value: 'splitOwner',
  },
  {
    header: 'Other',
    value: 'splitOther',
  },
  {
    header: 'Completed',
    value: 'completed',
  },
];

export const AAVEGOTCHI_COIN_MAP = new Map<string, AAVEGOTCHI_COIN>([
  ['claimedFUD', AAVEGOTCHI_COIN.FUD],
  ['claimedFOMO', AAVEGOTCHI_COIN.FOMO],
  ['claimedALPHA', AAVEGOTCHI_COIN.ALPHA],
  ['claimedKEK', AAVEGOTCHI_COIN.KEK],
]);
