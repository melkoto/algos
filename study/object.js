const object = {
  _value: null,
  getValue: () => this._value,
  setValue: value => {
    this._value = value;
  },
};

object.setValue(42);
object._value = 73; // изменили напрямую приватное свойство, а не должны уметь обращаться к нему
object.getValue(); // 73

/*
Ожидание
object.setValue(42);
object._value = 73; // изменили напрямую приватное свойство
object.getValue(); // 42
*/