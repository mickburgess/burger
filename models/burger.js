// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function (ormcb) {
    orm.all("burgers", function (res) {
      ormcb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals, ormcb) {
    orm.create("burgers", cols, vals, function (res) {
      ormcb(res);
    });
  },
  update: function (objColVals, condition, ormcb) {
    orm.update("burgers", objColVals, condition, function (res) {
      ormcb(res);
    });
  }
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;