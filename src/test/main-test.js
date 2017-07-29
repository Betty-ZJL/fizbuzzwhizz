'use strict';

describe('fizbuzzwhizz', () => {
  it('n既不是3或5或7的倍数，也不包含a', () => {
    var result=fizbuzzwhizz(3,5,7,1);
    expect(result).toEqual(1);
  });
  
  it('n是3的倍数，不包含a', () => {
      var result=fizbuzzwhizz(3,5,7,3);
      expect(result).toEqual('Fizz');
  });

  it('n是5的倍数，不包含a', () => {
      var result=fizbuzzwhizz(3,5,7,5);
      expect(result).toEqual('Buzz');
  });

  it('n是7的倍数，不包含a', () => {
    var result=fizbuzzwhizz(3,5,7,7);
    expect(result).toEqual('Whizz');
  });

  it('n是3和5的倍数，不包含a', () => {
    var result=fizbuzzwhizz(3,5,7,15);
    expect(result).toEqual('FizzBuzz');
  });

  it('n是3和7的倍数，不包含a', () => {
    var result=fizbuzzwhizz(3,5,7,21);
    expect(result).toEqual('FizzWhizz');
  });

  it('n是5和7的倍数，不包含a', () => {
    var result=fizbuzzwhizz(3,5,7,70);
    expect(result).toEqual('BuzzWhizz');
  });

  it('n是3,5,7的倍数，不包含a', () => {
    var result=fizbuzzwhizz(3,5,7,105);
    expect(result).toEqual('FizzBuzzWhizz');
  });

  it('n含有a', () => {
    var result=fizbuzzwhizz(3,5,7,13);
    expect(result).toEqual('Fizz');
  });

  it('n是3,5,7的倍数，但包含a', () => {
    var result=fizbuzzwhizz(3,5,7,35);
    expect(result).toEqual('Fizz');
  });
  
});
