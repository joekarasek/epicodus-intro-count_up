describe('countUpTo', function() {
  it('count up by units of one', function() {
    expect(countUpTo(10, 1)).to.equal("1,2,3,4,5,6,7,8,9,10")
  });
  it('count up by units equal to the step', function() {
    expect(countUpTo(10, 2)).to.equal("1,3,5,7,9")
  });
  it('count up by units equal to the step', function() {
    expect(countUpTo(25, 5)).to.equal("1,6,11,16,21")
  });
  it('count up by units equal to the step', function() {
    expect(countUpTo(4, 0.5)).to.equal("1,1.5,2,2.5,3,3.5,4")
  });
});
