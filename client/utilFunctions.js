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
