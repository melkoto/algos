function tournamentWinner(competitions, results) {
  const scores = new Map()
  let result = ''

  for (let i = 0; i < results.length; i++) {
    const [team1, team2] = competitions[i]

    if (!scores.has(team1)) scores.set(team1, 0)
    if (!scores.has(team2)) scores.set(team2, 0)

    if (results[i] === 0) {
      scores.set(team2, scores.get(team2) + 3)
    } else {
      scores.set(team1, scores.get(team1) + 3)
    }
  }

  let tempScore = -1
  for (const key of scores) {
    console.log(key) //?
    const [team, score] = key
      if (score > tempScore) result = team
  }
  return result
}

console.log(tournamentWinner([['HTML', 'C#'], ['C#', 'Python'], ['Python', 'HTML']], [0, 0, 1]))
console.log(tournamentWinner([['HTML', 'Java'], ['Java', 'Python'], ['Python', 'HTML'], ['C#', 'Python'], ['Java', 'C#'], ['C#', 'HTML']], [0, 1, 1, 1, 0, 1]))
