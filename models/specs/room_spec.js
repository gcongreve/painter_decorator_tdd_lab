const Room = require('../room.js');
const assert = require('assert')


describe('Room', function () {

  let room;

  beforeEach(function () {
    room = new Room(10)
  });

  it('should have an area', function () {
    const actual = room.area;
    assert.strictEqual(actual, 10)
  });

  it('should start unpainted', function () {
    const actual = room.isPainted;
    assert.strictEqual(actual, false)
  });

  it('should be able to be painted', function () {
    room.getsPainted();
    const actual = room.isPainted;
    assert.strictEqual(room.isPainted, true)
  });





});
