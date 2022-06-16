intersection(
  [[8, 12], [17, 22]],
  [[5, 11], [14, 18], [20, 23]]
) // [[8, 11], [17, 18], [20, 22]]

intersection(
  [[9, 15], [18, 21]],
  [[10, 14], [21, 22]]
) // [[10, 14]]

function intersection(user1, user2) {
  let res = []

  for (let i = 0; i < user1.length; i++) {
    for (let j = 0; j < user2.length; j++) {
      let temp = []
      let start1 = user1[i][0]
      let end1 = user1[i][1]
      let start2 = user2[j][0]
      let end2 = user2[j][1]

      if (isValid(start1, end1, start2, end2)) {
        temp.push(Math.max(start1, start2))
        temp.push(Math.min(end1, end2))
      }
      res.push(temp)
    }
  }
  // console.log(res)
  return res.filter(a => a.length)
}

function isValid(start1, end1, start2, end2) {
  return start1 < end2 && end1 > start2
}

