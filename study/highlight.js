'use strict';

/**
 * Метод устанавливает необходимые по условию атрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let tr = table.getElementsByTagName('tr')
  // console.log(tr, 'tr')

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].querySelectorAll('td')
    for (let j = 0; j < td.length; j++) {
      let role = td[j].getAttribute('data-role')
      // console.log(td[j].innerText)
      if (role) {
        tr[i].hidden = false
        tr[i].classList.add(role)

      } else {
        tr[i].hidden = true
      }

      if (td[j].innerText === 'm') {
        tr[i].className = 'male'
      }
      if (td[j].innerText === 'f') {
        tr[i].className = 'female'
      }
      if (!Number.isNaN(td[j].innerText) && Number.parseInt(td[j].innerText) < 18) {
        // tr[i].className = 'female'
        console.log('number')
        tr[i].style.textDecoration = 'line-through'
      }

    }
  }
}