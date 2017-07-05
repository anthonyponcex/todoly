var orm = require('../config/orm.js');

var today = {
  all: function(cb) {
    orm.all("todo_today", function(res) {
      cb(res);
    });
  },

  create: function(name, cb) {
    orm.create("todo_today", [
      "todo_name", "done"
    ], [
      name, false
    ], cb);
  },

  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("todo_today", {
      done: true
    }, condition, cb);
  }
};

module.exports = today;

