export const keywordCheck = (text, keywordArray) => {
  const regex = /,/g
  let lowerCaseText = text.toLowerCase().replace(regex, '')
  let keywordsSaid = []
  let keyWordsNotSaid = []

  let textArr = lowerCaseText.split(' ')
  for (let i = 0; i < keywordArray.length; i++) {
    if (textArr.includes(keywordArray[i])) {
      keywordsSaid.push(keywordArray[i])
    } else {
      keyWordsNotSaid.push(keywordArray[i])
    }
  }

  return [keywordsSaid, keyWordsNotSaid]
}

// functions to help render user stats data
export const formatDate = lastLogin => {
  const shortDate = lastLogin.slice(0, 10)
  const year = shortDate.slice(0, 4)

  const monthDay = shortDate.slice(6).concat('-')

  return monthDay.concat(year)
}

export const completedCheck = (allProbs, startedOrCompleted) => {
  let probNamesIds = {}

  // reference for getting problem names
  allProbs.forEach(prob => {
    probNamesIds[prob.id] = prob.name
  })

  let challengeStats = [[], []]

  startedOrCompleted.forEach(prob => {
    const chalId = prob.challengeId
    const name = probNamesIds[prob.challengeId]
    const nameObj = {id: [chalId], name} // {1: fibonacci}

    prob.isCompleted
      ? challengeStats[0].push(nameObj)
      : challengeStats[1].push(nameObj)
  })

  return challengeStats
}
