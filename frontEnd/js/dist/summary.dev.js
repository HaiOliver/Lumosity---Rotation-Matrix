"use strict";

$(document).ready(function () {
  showScore();
}); // restart button

var restart = function restart() {
  window.location.href = "./index.html";
}; // submit button


var submit = function submit() {
  // grab value
  var validate = document.getElementById('name').validity.valid;

  if (!validate) {
    alert("Username cannot empty !!!");
  } else {
    var username = document.getElementById("name").value;
    var getScore = document.getElementById("score").value; // post for fetch request

    var data = {
      name: username,
      score: getScore
    }; // POST request

    postRequest(data).then(function (response) {
      console.log('Success:', response);
      window.location.href = "./leaderboard.html";
    })["catch"](function (error) {
      console.error('Error:', error);
    }); // setname and score to redirect page

    setNameAndScore(); // call loading

    loading();
  }
};

var postRequest = function postRequest(data) {
  var response, getJson;
  return regeneratorRuntime.async(function postRequest$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch('https://memorygame-oliver-server.herokuapp.com/user', {
            method: 'POST',
            // or 'PUT'
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(function (response) {
            return response.json();
          });

        case 5:
          getJson = _context.sent;
          return _context.abrupt("return", getJson);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

var showScore = function showScore() {
  // grab value from index.html
  document.getElementById("score").innerHTML = localStorage.getItem("score"); // assign value

  document.getElementById("score").value = localStorage.getItem("score");
};

var setNameAndScore = function setNameAndScore() {
  localStorage.setItem("score", document.getElementById('score').value);
  localStorage.setItem("name", document.getElementById('name').value);
};

var loading = function loading() {
  var load = document.createElement('img');
  load.src = 'https://hubbravissimo.com/wp-content/uploads/2019/07/fff16-862c4e_80c174747b704e778f110260a995cc97mv2.gif';
  document.getElementById('loading').appendChild(load);
};