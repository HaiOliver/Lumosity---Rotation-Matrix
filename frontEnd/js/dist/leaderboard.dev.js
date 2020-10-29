"use strict";

// load window:
$(document).ready(function () {
  // render current User
  renderNameAndScore();
  var user = [];
  fetchUserInDB().then(function (result) {
    return user = result;
  }).then(function () {
    // call render -> got data here
    render(user.slice(0, 5)); // use indexOf ->rank current user

    console.log("database will : ", user);
    var rank = "not know yet"; // find current user

    user.find(function (found) {
      if (found.name == localStorage.getItem("name")) {
        rank = user.indexOf(found) + 1;
        document.getElementById('rank').innerHTML = rank;
      }
    });
  });
});

var fetchUserInDB = function fetchUserInDB() {
  var response;
  return regeneratorRuntime.async(function fetchUserInDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch('https://memorygame-oliver-server.herokuapp.com/users'));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          return _context.abrupt("return", _context.sent);

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log("line 43, learderboard: ", _context.t0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

var render = function render(users) {
  users.map(function (user) {
    appendName(user.name);
    appendScore(user.score);
  });
};

var appendName = function appendName(name) {
  // create table
  var user = document.createElement("li");
  var text = document.createTextNode(name);
  user.appendChild(text);
  document.getElementById("users").append(user);
};

var appendScore = function appendScore(score) {
  // create table
  var user = document.createElement("li");
  var text = document.createTextNode(score);
  user.appendChild(text);
  document.getElementById("score").append(user);
};

var renderNameAndScore = function renderNameAndScore() {
  // grab value from summary.html
  document.getElementById("currentUser").innerHTML = localStorage.getItem("name");
  document.getElementById("currentScore").innerHTML = localStorage.getItem("score");
};