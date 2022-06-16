function foo(callback) {
  setTimeout(function() {
    callback('A');
  }, Math.random()*100);
}

function bar(callback) {
  setTimeout(function() {
    callback('B');
  }, Math.random()*100);
}

function baz(callback) {
  setTimeout(function() {
    callback('C');
  }, Math.random()*100);
}

foo(function(a) {
  console.log(a)
  bar(function(b) {
    console.log(b)
    baz(function(c) {
      console.log(c)
    })
  })
})
