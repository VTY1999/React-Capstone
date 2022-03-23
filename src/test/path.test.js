import countryToPath from '../components/path';

describe('countryToPath function', () => {
  it('removes whitespaces in between', () => {
    const result = countryToPath('a                            b c     de    f');
    expect(result).toBe('abcdef');
  });

  it('changes uppercase letters to lowercase letters', () => {
    const result = countryToPath('VERISSIMO');
    expect(result).toBe('verissimo');
  });

  it('removes parenthesis', () => {
    const result = countryToPath('((VERISSIMO))');
    expect(result).toBe('verissimo');
  });
});
