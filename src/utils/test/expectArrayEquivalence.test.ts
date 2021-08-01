import { expectArrayEquivalence } from './expectArrayEquivalence';

describe('expectArrayEquivalence utility', () => {
  it('tests arrays equivalence', () => {
    const arrayA = [1, 2, 3];
    const arrayB = [1, 2, 3];

    expectArrayEquivalence(arrayA, arrayB);
  });
});
