
const Painter = function () {
  this.stock = []
};



Painter.prototype.addToStock = function (paintCan) {
  this.stock.push(paintCan)
};

Painter.prototype.stockTotal = function () {
  let total = 0
  this.stock.forEach((can) => {
    total += can.volume;
  })
  return total;
};

Painter.prototype.enoughPaint = function (room) {
  if (this.stockTotal() >= room.area){
    return true;
  }else {
    return false;
  }
};


Painter.prototype.paintRoom = function (room) {
  if (this.enoughPaint(room) === true){
    room.getsPainted();
    let unpaintedArea = room.area;
    this.stock.forEach((can) => {
      if (unpaintedArea <= can.volume){
        can.removePaint(unpaintedArea);
      } else if (unpaintedArea > can.volume) {
        unpaintedArea -= can.volume;
        can.volume = 0;
      }
    })
  }
};


Painter.prototype.stockCheck = function () {
  const notEmptyCans = [];
  this.stock.forEach((can) => {
    if (!can.empty()){
      notEmptyCans.push(can)
    }
  });
  this.stock = notEmptyCans;
};

module.exports = Painter;
