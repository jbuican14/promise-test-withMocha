const calculateSquare = require('../src/calc-square.promise.js');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;

chai.use(chaiAsPromised);

describe('calculateSquare', function () {
  this.timeout(4000);

  it('should resolve with number 4 if passed number 2', function (done) {
    expect(calculateSquare(2)).to.eventually.be.equal(4).notify(done);
  });

  it('should become fulfilled when passed number 2', function (done) {
    expect(calculateSquare(2)).to.be.fulfilled.notify(done);
  });

  it('should become rejected if pass a string instead of a number', function (done) {
    expect(calculateSquare('three')).to.be.rejected.notify(done);
  });
});
