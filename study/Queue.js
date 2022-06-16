class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  // Ставит элемент в очередь.
  // Возвращает новый размер очереди.
  enqueue(value) {
    const node = { value, next: null, prev: null };

    if (!this.head) {
      this.head = node
      this.tail = this.head
      this.size++
      return this.size
    }

    // node.next = this.head
    // this.head.prev = node
    // this.head = node
    // this.size++
    // console.log(this.size)
    // return this.size
    this.tail.next = node
    node.prev =  this.tail
    this.tail = node
    this.size++
    return this.size
  }

  // Убирает элемент из очереди.
  // Если очередь пустая, кидает ошибку.
  // Возвращает удалённый элемент.
  dequeue() {
    if (!this.head) throw new Error("empty stack")

    // let returnValue = this.head.value
    // this.head = this.head.next
    let returnValue = this.peek()

    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else  {
      this.head = this.head.next
      this.head.prev = null
    }
    // this.tail.next = null
    this.size--
    // console.log(returnValue, "returnValue")
    return returnValue.value
  }

  // Возвращает элемент в начале очереди.
  peek() {
    return this.head ? this.head : null
  }

  // Если очередь пустая, возвращает true. В противном случае –– false.
  isEmpty() {
    return this.size === 0
  }

  print() {
    let curr = this.head
    let res = ''
    while (curr) {
      res += curr.value + ' '
      // console.log(
      //     `prev: ${curr.prev?.value}, curr: ${curr.value}, next: ${curr.next?.value}`,
      // )
      curr = curr.next
    }
    return res
  }
}
