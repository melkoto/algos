function zip(...args) {
  // Ваш код
  const res = {}

  for (let i = 0; i < args.length; i++) {
    let currObj = args[i]

    for (let key in currObj) {
      if (!(key in res)) {
        res[key] = currObj[key]
      }
    }
  }
  return res
}


// Пример работы
const objects = [
  { foo: 5, bar: 6 },
  { foo: 13, baz: -1 } // foo - повторяющийся ключ
];

zip(...objects); // { foo: 5, bar: 6, baz: -1 }