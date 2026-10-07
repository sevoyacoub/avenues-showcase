import { describe, expect, it } from 'vitest';
import { business } from '../lib/business';

describe('published business facts', () => {
  it('uses the supplied exact store address for directions', () => {
    expect(business.address).toBe('231 Philadelphia Ave, Egg Harbor City, NJ 08215');
    expect(new URL(business.directions).searchParams.get('destination')).toBe(business.address);
  });
  it('only publishes the verified regular and third-Saturday hours', () => {
    expect(business.hours).toEqual([
      { days: 'Tuesday–Friday', time: '10 AM–4 PM' },
      { days: 'Third Saturday of the month', time: '10 AM–2 PM' },
    ]);
  });
});