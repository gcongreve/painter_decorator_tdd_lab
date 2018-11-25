const Painter = require('../painter.js');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js');
const assert = require('assert');

describe("Painter", function () {

  let painter;
  let paintCan1;
  let paintCan2;
  let paintCanEmpty
  let bigRoom;
  let smallRoom;

  beforeEach(function () {
    painter = new Painter();
    paintCan1 = new PaintCan(10);
    paintCan2 = new PaintCan(20);
    paintCanEmpty = new PaintCan(0);
    bigRoom = new Room(100);
    smallRoom = new Room(15);
    mediumRoom = new Room(25);
  });

  it("Should start with empty paint stock", function () {
    const actual = painter.stock;
    assert.deepStrictEqual(actual, []);
  });


  it("Should be able to add paint can to stock", function () {
    painter.addToStock(paintCan1);
    const expected = [paintCan1];
    const actual = painter.stock;
    assert.deepStrictEqual(actual, expected)
  });


  it("Should be able to calculate total amount in stock", function () {
    painter.addToStock(paintCan1);
    painter.addToStock(paintCan2);
    const actual = painter.stockTotal();
    assert.strictEqual(actual, 30);
  });

  it("Should be able to tell if it has enough paint_true", function () {
    painter.addToStock(paintCan2);
    const actual = painter.enoughPaint(smallRoom);
    assert.strictEqual(actual, true);
  });

  it("Should be able to tell if it has enough paint_false", function () {
    painter.addToStock(paintCan2);
    const actual = painter.enoughPaint(bigRoom);
    assert.strictEqual(actual, false);
  });

  it("Should be able to paint room if has enough stock_true", function () {
    painter.addToStock(paintCan2);
    painter.paintRoom(smallRoom);
    const actual = smallRoom.isPainted;
    assert.strictEqual(actual, true)
  });

  it("Should be able to paint room if has enough stock_false", function () {
    painter.addToStock(paintCan2);
    painter.paintRoom(bigRoom);
    const actual = bigRoom.isPainted;
    assert.strictEqual(actual, false)
  });

  it("Should reduce paint stock by the correct amount_small", function () {
    painter.addToStock(paintCan2);
    painter.paintRoom(smallRoom);
    const actual = painter.stockTotal();
    assert.strictEqual(actual, 5);
  });

  it("Should reduce paint stock by the correct amount_medium", function () {
    painter.addToStock(paintCan2);
    painter.addToStock(paintCan1);
    painter.paintRoom(mediumRoom);
    const actual = painter.stockTotal();
    assert.strictEqual(actual, 5);
  });

  it("Should be abe to remove empty paint cans", function () {
    painter.addToStock(paintCanEmpty);
    painter.addToStock(paintCan1);
    painter.stockCheck();
    const actual = painter.stock;
    const expected = [paintCan1]
    assert.deepStrictEqual(actual, expected);
  });









});
