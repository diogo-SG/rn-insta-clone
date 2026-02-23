/**
 * Mock users (20). Avatar URLs from pravatar.cc for consistent placeholders.
 */

import type { User } from './types';

const AVATAR_BASE = 'https://i.pravatar.cc';
const AVATAR_SIZE = 100;

function avatarUrl(seed: string): string {
  return `${AVATAR_BASE}/${AVATAR_SIZE}?u=${encodeURIComponent(seed)}`;
}

export const MOCK_USERS: User[] = [
  { id: '1', username: 'alex.rivera', avatarUrl: avatarUrl('user1') },
  { id: '2', username: 'jordan.lee', avatarUrl: avatarUrl('user2') },
  { id: '3', username: 'sam.taylor', avatarUrl: avatarUrl('user3') },
  { id: '4', username: 'casey.morgan', avatarUrl: avatarUrl('user4') },
  { id: '5', username: 'riley.quinn', avatarUrl: avatarUrl('user5') },
  { id: '6', username: 'morgan.reed', avatarUrl: avatarUrl('user6') },
  { id: '7', username: 'avery.clarke', avatarUrl: avatarUrl('user7') },
  { id: '8', username: 'quinn.brooks', avatarUrl: avatarUrl('user8') },
  { id: '9', username: 'skyler.hayes', avatarUrl: avatarUrl('user9') },
  { id: '10', username: 'cameron.bell', avatarUrl: avatarUrl('user10') },
  { id: '11', username: 'drew.parker', avatarUrl: avatarUrl('user11') },
  { id: '12', username: 'jamie.foster', avatarUrl: avatarUrl('user12') },
  { id: '13', username: 'kendall.hall', avatarUrl: avatarUrl('user13') },
  { id: '14', username: 'reese.collins', avatarUrl: avatarUrl('user14') },
  { id: '15', username: 'sage.murphy', avatarUrl: avatarUrl('user15') },
  { id: '16', username: 'finley.wright', avatarUrl: avatarUrl('user16') },
  { id: '17', username: 'emerson.scott', avatarUrl: avatarUrl('user17') },
  { id: '18', username: 'harper.green', avatarUrl: avatarUrl('user18') },
  { id: '19', username: 'peyton.king', avatarUrl: avatarUrl('user19') },
  { id: '20', username: 'rowan.adams', avatarUrl: avatarUrl('user20') },
];
