const object = {
  value: '42',
  print () {
    const type = () => {
      return typeof this.value;
    }

    console.log(`${this.value} is ${type()}`);
  }
}

object.print(); // Поправьте замыкание