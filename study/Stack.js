class Stack {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  // Кладёт элемент на стек.
  // Возвращает новый размер стека.
  push(value) {
    const node = { value, next: null, prev: null };

    if (!this.head) {
      this.head = node
      this.tail = this.head
      this.size++
      return
    }

    node.prev = this.tail
    this.tail.next = node
    this.tail = node
    this.size++
    return this.size
  }

  // Убирает элемент со стека.
  // Если стек пустой, кидает ошибку.
  // Возвращает удалённый элемент.
  pop() {
    if (!this.head) throw new Error("empty stack")
    let returnValue = this.tail.value
    this.tail = this.tail.prev
    // this.tail.next = null
    this.size--
    return returnValue
  }

  // Возвращает верхний элемент стека без его удаления.
  peek() {
    return this.tail ? this.tail : null
  }

  // Если стек пуст, возвращает true. В противном случае –– false.
  isEmpty() {
    return this.size === 0
  }

  print() {
    let curr = this.head
    let res = ''
    while (curr) {
      res += curr.value + ' '
      console.log(
        `prev: ${curr.prev?.value}, curr: ${curr.value}, next: ${curr.next?.value}`,
      )
      curr = curr.next
    }
    return res
  }
}
