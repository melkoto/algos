let innerDiv = document.querySelector('.inner')
let impMes = document.querySelector('.btn1')

impMes.addEventListener('click', e => {
    e.preventDefault()
    let allInputs = document.querySelectorAll('input')

    let allInputsArr = []

    for (let i = 0; i < allInputs.length; i++) {
        allInputsArr.push(allInputs[i].value)
    }

    const [message, key, value] = allInputsArr
    console.log(message)
    console.log(key)
    console.log(value)

    innerDiv.innerText = message
    innerDiv.style.color = 'red'
    innerDiv.style[key] = `${value}`
})

const [n1, n2, n3, n4] = [1,2,3]
console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)
