import { terms } from './terms';

const MATCHES_LETTER = /[a-z]/g;

export function fuuid (censor?: boolean): string {
  let value = '';

  for (let i = 0; i < 32; i += 1) {
    if (i > 0) {
      value += '-';
    }

    value += terms[Math.floor(Math.random() * terms.length)];
  }

  if (!censor) {
    return value;
  }

  return value.replace(MATCHES_LETTER, '*');
}
