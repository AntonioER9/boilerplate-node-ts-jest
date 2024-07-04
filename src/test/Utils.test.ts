import { getStringInfo, toUpperCase } from '../app/Utils';

describe('Utils test suite', () => { 

  it('should return uppercase of valid string', () => { 
    // arrange:
    const sut = toUpperCase;
    const expected = 'ABC';

    // act:
    const actual = toUpperCase('abc');

    //assert:
    expect(actual).toBe(expected);
    
  });

  it.only('should return info for valid string', () => { 

    const actual = getStringInfo('My-String');
    
    expect(actual.lowerCase).toBe('my-string');
    expect(actual.extraInfo).toEqual({}); //compare objects toEqual

    expect(actual.characters.length).toBe(9);
    expect(actual.characters).toHaveLength(9);

    expect(actual.characters).toEqual(['M', 'y', '-','S', 't', 'r','i', 'n', 'g']);
    expect(actual.characters).toContain<string>('M');
    expect(actual.characters).toEqual(
        expect.arrayContaining(['S', 't', 'r','i', 'n', 'g', 'M', 'y', '-'])
    );

    // ways to validate an undefined
    expect(actual.extraInfo).not.toBe(undefined); 
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeDefined();
    expect(actual.extraInfo).toBeTruthy();

  });


});