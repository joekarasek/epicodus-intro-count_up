describe('countUpTo', function() {
  it('count up by units of one', function() {
    expect(countUpTo(10, 1)).to.equal("1,2,3,4,5,6,7,8,9,10")
  });
});
