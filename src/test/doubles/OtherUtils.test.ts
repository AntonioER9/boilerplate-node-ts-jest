import { calculateComplexity, toUpperCaseWithCb } from "../../app/doubles/OtherUtils"


describe('OtherUtils test suite', () => {

  describe.only('Tracking callbacks with Jest mocks', () => {

    const callBackMock = jest.fn();

    afterEach(() => {
      jest. clearAllMocks();
    })

    it('calls callback for invalid argument - track calls', () => { //Fake
      const actual = toUpperCaseWithCb('', callBackMock);
      expect(actual).toBeUndefined();
      expect(callBackMock).toHaveBeenCalledWith('Invalid argument!');
      expect(callBackMock).toHaveBeenCalledTimes(1);
    })

    it('calls callback for valid argument - track calls', () => { //Fake
      const actual = toUpperCaseWithCb('abc', callBackMock);
      expect(actual).toBe('ABC');
      expect(callBackMock).toHaveBeenCalledWith('called function with abc');
      expect(callBackMock).toHaveBeenCalledTimes(1);
    })
  
  });


  describe('Tracking callbacks', () => {

    let cbArgs = [] as any;
    let timesCalled = 0;

    function callBackMock(arg: string){
      cbArgs.push(arg);
      timesCalled++;
    }

    afterEach(() => { // clearing tracking fields
      cbArgs = [];
      timesCalled = 0;
    })

    it('calls callback for invalid argument - track calls', () => { //Fake
      const actual = toUpperCaseWithCb('', callBackMock);
      expect(actual).toBeUndefined();
      expect(cbArgs).toContain('Invalid argument!');
      expect(timesCalled).toBe(1);
    })

    it('calls callback for valid argument - track calls', () => { //Fake
      const actual = toUpperCaseWithCb('abc', callBackMock);
      expect(actual).toBe('ABC');
      expect(cbArgs).toContain('called function with abc');
      expect(timesCalled).toBe(1);
    })

  })

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