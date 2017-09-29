import { fuuid } from '../src/';
import { LENGTH } from '../src/constants';
import { terms } from '../src/terms';

const MATCHES_FUUID = /^[a-z]+(?:-[a-z]+){21}$/;
const MATCHES_CENSORED_FUUID = /^\*+(?:-\*+){21}$/;

const UUID_CHAR_COUNT = 16;
const UUID_LENGTH = 32;

function getVariationCount (chars: number, length: number) {
  return Math.pow(chars, length);
}

describe('fuuid', () => {

  it('generates a string', () => {
    expect(typeof fuuid()).toBe('string');
  });

  it('generates a 22 term string with hyphen separators', () => {
    expect(MATCHES_FUUID.test(fuuid())).toBe(true);
  });

  it('should optionally censor the fuuid', () => {
    expect(MATCHES_CENSORED_FUUID.test(fuuid(true))).toBe(true);
  });

  it('should be more unique than a UUID', () => {
    expect(getVariationCount(terms.length, LENGTH))
      .toBeGreaterThan(getVariationCount(UUID_CHAR_COUNT, UUID_LENGTH));
  });

});
