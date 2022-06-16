'use strict';

const badResult = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log(i);
    }, 10);
  }
};

const iifeSolution = () => {
  for (var i = 0; i < 10; i++) {
    cf(i)
  }
};
function cf(i) {
  setTimeout(function() {
    console.log(i);
  }, 10);
}

function es6Solution() {
  for (let i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log(i);
    }, 10);
  }
}

const bindSolution = function () {
  for (var i = 0; i < 10; i++) {
    var j = i
    setTimeout(function() {
      console.log(this);
    }.bind(i), j * 10);
  }
};


badResult()