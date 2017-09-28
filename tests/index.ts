import { fuuid } from '../src/';

describe('fuuid', () => {

  const MATCHES_FUUID = /^[a-z]+(?:-[a-z]+){31}$/;
  const MATCHES_CENSORED_FUUID = /^\*+(?:-\*+){31}$/;

  it('generates a string', () => {
    expect(typeof fuuid()).toBe('string');
  });

  it('generates a 32 term string with hyphen separators', () => {
    expect(MATCHES_FUUID.test(fuuid())).toBe(true);
  });

  it('should optionally censor the fuuid', () => {
    expect(MATCHES_CENSORED_FUUID.test(fuuid(true))).toBe(true);
  });

});
