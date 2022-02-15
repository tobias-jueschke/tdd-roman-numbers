const romanNumberMap: {[key: string]: string} = {
  '1' : 'I',
  '4' : 'IV',
  '5' : 'V',
  '9' : 'IX',
  '10': 'X',
  '40': 'XL',
  '50': 'L',
  '90': 'XC',
  '100': 'C',
  '400': 'CD',
  '500': 'D',
  '900': 'CM',
  '1000': 'M'
}

const convert = (number: number) => {
  let romanNumberString = '';
  let reducedNumber = number;

  Object.keys(romanNumberMap).reverse().forEach((romanNumberValueString: string) =>{
    const sign = romanNumberMap[romanNumberValueString];
    const value = Number(romanNumberValueString);

    while(reducedNumber >= value) {
      reducedNumber -= value;
      romanNumberString += sign;
    }
  });

  return romanNumberString;
}

describe('Roman numbers', () => {
  it('should return I for a given number 1', () => {
    expect(convert(1)).toBe('I');
  });

  it('should return IV for a given number 4', () => {
    expect(convert(4)).toBe('IV');
  });

  it('should return V for a given number 5', () => {
    expect(convert(5)).toBe('V');
  });

  it('should return VII for a given number 7', () => {
    expect(convert(7)).toBe('VII');
  });

  it('should return IX for a given number 9', () => {
    expect(convert(9)).toBe('IX');
  });

  it('should return X for a given number 10', () => {
    expect(convert(10)).toBe('X');
  });

  it('should return XIII for a given number 13', () => {
    expect(convert(13)).toBe('XIII');
  });

  it('should return XXII for a given number 22', () => {
    expect(convert(22)).toBe('XXII');
  });

  it('should return LX for a given number 60', () => {
    expect(convert(60)).toBe('LX');
  });

  it('should return MCMLXXXIV for a given number 1984', () => {
    expect(convert(1984)).toBe('MCMLXXXIV');
  });

  it('should return MM for a given number 2000', () => {
    expect(convert(2000)).toBe('MM');
  });

})
