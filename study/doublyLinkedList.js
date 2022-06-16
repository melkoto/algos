class DoublyLinkedList {
  constructor() {
    this.size = 0
    this.head = null
    this.tail = null
  }

  // Добавляет элемент в список.
  // Если указан индекс - добавляет по индексу,
  // в противном случае добавляет в конец.
  // Если индекс за пределами — кидает ошибку.
  add(value, index) {
    const node = createNode(value)
    if (index === 0) {
      this.addAtHead(value)
      return
    }
    // if (index === this.size) this.addAtTail(value)
    if (!index) {
      this.addAtTail(value)
      return
    }

    if (index < 0 || index > this.size) throw new Error('wrong index')

    let curr = this.head
    let ind = index
    while (curr && ind > 0) {
      curr = curr.next
      ind--
    }

    let nextNodeLink = curr.next
    curr.next = node
    node.prev = curr
    node.next = nextNodeLink
    nextNodeLink.prev = node
    this.size++
  }

  // Удаляет элемент из списка по значению.
  // Удаляет только первый найденный элемент.
  // Если элемент не найден, ничего делать не нужно.
  removeByValue(value) {
    let curr = this.head

    while (curr) {

      // если число находится в начале СС
      if (curr.value === value) {
        this.head = this.head.next
        // this.head.prev = null
        this.size--
        break
      }

      // если след число равно value
      if (curr.next?.value === value) {
        // если нужно удалить последний элемент
        if (!curr.next.next) {
          curr.next = null
          this.tail = curr
          this.size--
          break
        }
        curr.next = curr.next.next
        if (curr.next.next) {
          curr.next.next.prev = curr
        }
        this.size--
        break
      }
      curr = curr.next
    }
  }

  // Удаляет элемент из списка по индексу.
  // Если индекс за пределами — кидает ошибку.
  removeByIndex(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('wrong index')
    }

    let curr = this.head

    if (index === 0) {
      this.head = curr.next
      if (this.head) {
        this.head.prev = null
      }
      this.size--

      if (!this.head) {
        this.tail = null
      }

      return
    }

    for (let i = 0; i < index; i++) {
      curr = curr.next

    }

    if (index === this.size - 1) {
      this.tail = curr.prev
    }

    let prevNode = curr.prev
    let nextNode = curr.next
    prevNode.next = nextNode
    if (nextNode) nextNode.prev = prevNode
    this.size--
  }

  // Ищет элемент в списке по индексу.
  // Если индекс за пределами — кидает ошибку.
  searchByIndex(index) {
    if (index < 0 || index >= this.size) throw new Error('wrong index')
    let curr = this.head
    let ind = index
    while (ind > 0) {
      curr = curr.next
      ind--
    }
    return curr
  }

  // Ищет элемент в списке по значению.
  // Возвращает первый найденный элемент.
  // Опционально можно указать индекс начала поиска.
  // Если индекс за пределами — кидает ошибку.
  // Если элемент не найден, нужно вернуть null.
  searchByValue(value, startIndex = 0) {
    if (startIndex < 0 || startIndex >= this.size) throw new Error('wrong index')
    let curr = this.head
    let ind = startIndex

    while (ind > 0) {
      curr = curr.next
      ind--
    }

    while (curr) {
      if (curr.value === value) return curr
      curr = curr.next
    }
    return null
  }

  addAtHead(value) {
    const node = createNode(value)

    if (this.head) {
      this.head.prev = node
      node.next = this.head
    }

    this.head = node

    if (!this.tail) {
      this.tail = node
    }

    this.size++
  }

  addAtTail(value) {
    const node = createNode(value)

    if (this.tail) {
      node.prev = this.tail
      this.tail.next = node
    }

    this.tail = node

    if (!this.head) {
      this.head = node
    }

    this.size++
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

// Создаёт новую ноду, где
// value — её значение,
// next — ссылка на следующую ноду,
// prev — ссылка на предыдущую ноду
function createNode(value) {
  return {
    value,
    next: null,
    prev: null,
  }
}
