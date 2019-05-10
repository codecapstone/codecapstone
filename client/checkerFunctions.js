const fib = n => {
  const n1 = Number(n)
  const result = [0, 1]

  for (let i = 2; i <= n1; i++) {
    const a = result[i - 1]
    const b = result[i - 2]

    result.push(a + b)
  }

  let num = result[n1]

  return num.toString()
}

function anagrams(string) {
  const stringArr = string.split(',')
  let stringA = stringArr[0]
  let stringB = stringArr[1]
  if (cleanString(stringA) === cleanString(stringB)) {
    return 'true'
  } else {
    return 'false'
  }
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

const checkers = {
  fib,
  anagrams
}
export default checkers
