const PaintCan = require('../paint_can.js');
const assert = require('assert');

describe('PaintCan', function () {

  let paintCan;

  beforeEach(function () {
    paintCan = new PaintCan(10);
  });

  it('Should be able to have a volume of paint', function () {
    actual = paintCan.volume;
    assert.strictEqual(actual, 10);
  });

  it('Should be able to check if it is empty', function () {
    actual = paintCan.empty();
    assert.strictEqual(actual, false)
  });

  it('Should be able to empty itself of paint', function () {
    paintCan.removePaint(5);
    actual = paintCan.volume;
    assert.strictEqual(actual, 5)
  })




});
