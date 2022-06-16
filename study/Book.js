function Book() {
  this.name = 'foo';
}

Book.prototype = {
  getName: function() {
    return this.name;
  },
  getUpperName: function() {
    return this.name.toUpperCase()
  }
}

var book = new Book();

// В этой строке определить метод getUpperName

console.log(book.getUpperName()); // 'FOO'