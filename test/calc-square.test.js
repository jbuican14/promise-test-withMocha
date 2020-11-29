const calculateSquare = require('../src/calc-square.promise.js');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;

chai.use(chaiAsPromised);

describe('calculateSquare', function () {
  this.timeout(4000);

  it('should resolve with number 4 if passed number 2', function () {
    return calculateSquare(2).then((result) => {
      expect(result).to.be.above(3);
      expect(result).to.be.equal(4);
    });
  });

  it('should become fulfilled when passed number 2', function (done) {
    expect(calculateSquare(2)).to.be.fulfilled.notify(done);
  });

  it('should become rejected if pass a string instead of a number', function (done) {
    expect(calculateSquare('three')).to.be.rejected.notify(done);
  });

  //alternatively
  it('should return a rejected promise if a string is passed', function () {
    return calculateSquare('str').catch((reason) => {
      expect(reason).to.not.equal(null);
      expect(reason.message).to.equal('Argument of type number is expected');
    });
  });
});
