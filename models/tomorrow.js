var orm = require('../config/orm.js');

var tomorrow = {
  all: function(cb) {
    orm.all("todo_tomorrow", function(res) {
      cb(res);
    });
  },

  create: function(name, cb) {
    orm.create("todo_tomorrow", [
      "todo_name", "done"
    ], [
      name, false
    ], cb);
  },

  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("todo_tomorrow", {
      done: true
    }, condition, cb);
  }
};

module.exports = tomorrow;