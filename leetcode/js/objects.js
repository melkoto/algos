// Как создать объект
let o = new Object()
let p = {
    // name: "Movsar",
    // age: 32,
    isStudent: false,
    1: 'one',
}

// Как добавить/удалить свойство (ключ: значение) в объекте
p.name = 'Movsar'
p['age'] = 32
p.key = 'This is KEY'
console.log(p)
p.isHuman = true
console.log(p)
delete p.isHuman
console.log(p)

// Как получить значение ключа
console.log(p.age)
console.log(p.name)
console.log(p.isHuman)
console.log(p['age'])

// Разница между obj.key/obj["key"]/obj[key]
let myAge = 'age'
console.log(p.age)
console.log(p['age'])
console.log(p[myAge])
console.log(p.myAge)

// Проверка существования свойства
console.log('age' in p)
console.log('isHuman' in p)
if ('age' in p) console.log('yes')
else console.log('no')

// Цикл for in, (typeof key)
for (let key in p) {
    console.log(key)
    console.log(p[key])
    console.log(p[key])
    console.log(typeof key)
}

// Деструктуризация объекта
// let name = p.name
let { name: myName } = p
let { name } = p
let { age: myAgge } = p
console.log('I am ' + myName)
console.log('I am ' + myAgge + ' years old')

// Спред оператор. Приоритет при использовании спред оператора
let person = {
    name: 'Adam',
    age: 25,
    isStudent: false,
    isWorking: true,
}

let person1 = { ...person, name: 'Alex', isWorking: false }
console.log(person1)

let person2 = { ...person, name: 'Timur', phoneNumber: '8989898989898' }
console.log(person2)

// Object.keys(), Object.values(), Object.entries()
console.log(Object.keys(p))
console.log(Object.values(p))
console.log(Object.entries(p))
