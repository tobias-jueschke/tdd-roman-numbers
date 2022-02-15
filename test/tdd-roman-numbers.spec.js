const map = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
};

const convert = (number) => {
  switch (number) {
    case 1:
      return 'I';
    case 2:
      return 'II';
    case 3:
      return 'III';
    case 4:
      return 'IV';
    case 5:
      return 'V';
    case 6:
      return 'VI';
  }
};

describe('roman numbers converter',() => {
  it('convert() should return string', () => {
    expect(typeof convert(1)).toBe('string');
  })

  it('convert() should return "I" for input 1', () => {
    expect(convert(1)).toBe('I');
  })

  it('convert() should return "II" for input 2', () => {
    expect(convert(2)).toBe('II');
  })

  it('convert() should return "IV" for input 4', () => {
    expect(convert(4)).toBe('IV');
  })

  it('convert() should return "V" for input 5', () => {
    expect(convert(5)).toBe('V');
  });

  it('convert() should return "VI" for input 6', () => {
    expect(convert(6)).toBe('VI');
  });
})
