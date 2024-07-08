import { calculateComplexity, toUpperCaseWithCb } from "../../app/doubles/OtherUtils"


describe('OtherUtils test suite', () => {

  it('ToUpperCase - calls callback for invalid argument', () => { //Fake
    const actual = toUpperCaseWithCb('', ()=>{});
    expect(actual).toBeUndefined();
  })

  it('ToUpperCase - calls callback for valid argument', () => { //Fake
    const actual = toUpperCaseWithCb('abc', ()=>{});
    expect(actual).toBe('ABC');
  })

  it('Calculates complexity', () => { //Stub
    const someInfo = {
      length: 5,
      extraInfo: {
        field1: 'someInfo',
        field2: 'someOtherInfo'
      }
    }

    const actual = calculateComplexity(someInfo as any);
    expect(actual).toBe(10);
  })

})