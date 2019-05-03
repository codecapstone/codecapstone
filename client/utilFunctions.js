export const keywordCheck = (text, keywordArray) => {
  let keywordsSaid = []
  let keyWordsNotSaid = []
  let textArr = text.split(' ')
  for (let i = 0; i < keywordArray.length; i++) {
    if (textArr.includes(keywordArray[i])) {
      keywordsSaid.push(keywordArray[i])
    } else {
      keyWordsNotSaid.push(keywordArray[i])
    }
  }
  return [keywordsSaid, keyWordsNotSaid]
}
