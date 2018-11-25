
const PaintCan = function (volume) {
  this.volume = volume;
};



PaintCan.prototype.empty = function () {
  if (this.volume <= 0){
    return true;
  } else {
    return false;
  };
};

PaintCan.prototype.removePaint = function (removedPaint) {
  this.volume -= removedPaint;
};





module.exports = PaintCan;
