class MyArray {
  constructor(initialSize = 1) {
    if (Number(initialSize) !== initialSize || Math.round(initialSize) !== initialSize) {
      throw new Error('Длина массива должна быть целым числом')
    }

    if (!(initialSize > 0)) {
      throw new Error('Размер массива должен быть больше нуля')
    }

    this.size = initialSize
    this.memory = allocate(initialSize)
    this.length = 0
  }

  #checkIndex(index) {
    if (index >= this.length || index < 0) {
      throw new Error('wrong index')
    }
  }

  // Возвращает значение по индексу.
  // Если индекс за пределами — кидает ошибку.
  get(index) {
    this.#checkIndex(index)
    return this.memory[index]
  }

  // Устанавливает значение по индексу.
  // Если индекс за пределами — кидает ошибку.
  set(index, value) {
    this.#checkIndex(index)
    this.memory[index] = value
  }

  // Добавляет новый элемент в массив.
  // Если index не определён — добавляет в конец массива.
  // В противном случае — добавляет по индексу со сдвигом
  // всех последующих элементов.
  // Если индекс за пределами - кидает ошибку.
  // Увеличивает выделенную память вдвое, если необходимо.
  // Возвращает новую длину массива.
  add(value, index) {
    if (!index) {
      this.memory[this.length] = value
      this.length++

      if (this.length === this.size) {
        allocate(this.size * 2)
        this.size *= 2
      }
      return this.length
    }

    // this.#checkIndex(index)

    if (this.length === this.size) {
      allocate(this.size * 2)
      this.size *= 2
    }

    for (let i = this.length; i >= index; i--) {
      this.memory[i] = this.memory[i - 1]
    }
    this.memory[index] = value
    this.length++

    return this.length
  }

  // Удаляет элемент по индексу со сдвигом всех последующих элементов.
  // Если индекс за пределами - кидает ошибку.
  // Возвращает новую длину массива.
  delete(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.memory[i] = this.memory[i + 1];
    }

    let next = this.memory[this.memory - 1]
    delete this.memory[this.length - 1]
    this.length--
    return this.length
  }
}

function allocate(size) {
  const memory = {}

  for (let i = 0; i < size; i++) {
    memory[i] = undefined
  }

  return memory
}
