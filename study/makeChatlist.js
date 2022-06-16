'use strict';

/**
 * Генерация HTML списка чатов
 * @param {Chat[]} chats
 * @return {HTMLUListElement}
 */
function makeChatsList(chats) {
  let ul = document.createElement('ul')

  for (let obj of chats) {
    let title = document.createElement('li')
    let mes = document.createElement('li')
    title.innerText = obj.title
    mes.innerText = obj.lastMessage
    ul.append(title, mes)
  }
  return ul

}