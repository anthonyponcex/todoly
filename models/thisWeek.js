var orm = require('../config/orm.js');

var thisWeek = {
  all: function(cb) {
    orm.all("todo_thisweek", function(res) {
      cb(res);
    });
  },

  create: function(name, cb) {
    orm.create("todo_thisweek", [
      "todo_thisweek", "done"
    ], [
      name, false
    ], cb);
  },

  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("todo_thisweek", {
      done: true
    }, condition, cb);
  }
};

module.exports = thisWeek;