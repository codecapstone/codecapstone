export const keywordCheck = (text, keywordArray) => {
  let keywordsSaid = []
  let textArr = text.split(' ')
  for (let i = 0; i < keywordArray.length; i++) {
    if (textArr.includes(keywordArray[i])) {
      keywordsSaid.push(keywordArray[i])
    }
  }
  return keywordsSaid
}
