jest.mock('../../app/doubles/OtherUtils', ()=>({ //Mock of a part of the module
  ...jest.requireActual('../../app/doubles/OtherUtils'),
  calculateComplexity: ()=>{return 10}
}));

jest.mock('uuid', ()=>({ // Mock of the entiry module
  v4: ()=>'123'
}))

import * as OtherUtils from '../../app/doubles/OtherUtils';

describe('module tests', ()=>{


  test('calculate complexity', ()=>{
      const result = OtherUtils.calculateComplexity({} as any);
      expect(result).toBe(10);
  })

  test('keep other functions', ()=>{
      const result = OtherUtils.toUpperCase('abc');
      expect(result).toBe('ABC');
  })

  test('string with id', ()=>{
      const result = OtherUtils.toLowerCaseWithId('ABC');
      expect(result).toBe('abc123');
  })
})