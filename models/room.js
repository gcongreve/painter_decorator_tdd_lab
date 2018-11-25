
const Room = function (area) {

this.area = area;
this.isPainted = false;


};

Room.prototype.getsPainted = function () {
  this.isPainted = true;
};

module.exports = Room;
