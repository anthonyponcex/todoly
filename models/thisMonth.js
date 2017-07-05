var orm = require('../config/orm.js');

var thisMonth = {
  all: function(cb) {
    orm.all("todo_thismonth", function(res) {
      cb(res);
    });
  },

  create: function(name, cb) {
    orm.create("todo_thismonth", [
      "todo_thismonth", "done"
    ], [
      name, false
    ], cb);
  },

  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("todo_thismonth", {
      done: true
    }, condition, cb);
  }
};

module.exports = thisMonth;