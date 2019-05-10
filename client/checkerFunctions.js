const fib = n => {
  try {
    const n1 = Number(n)
    const result = [0, 1]

    for (let i = 2; i <= n1; i++) {
      const a = result[i - 1]
      const b = result[i - 2]

      result.push(a + b)
    }

    let num = result[n1]

    return num.toString()
  } catch (err) {
    return `Ooops.  There's an error.  Check your input is of the correct type!`
  }
}

function anagrams(string) {
  try {
    const stringArr = string.split(',')
    let stringA = stringArr[0]
    let stringB = stringArr[1]
    if (cleanString(stringA) === cleanString(stringB)) {
      return 'true'
    } else {
      return 'false'
    }
  } catch (err) {
    return `Ooops.  There's an error.  Check your input is of the correct type!`
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

function palindrome(str) {
  const reversed = str
    .split('')
    .reverse()
    .join('')
  if (str === reversed) {
    return 'true'
  } else {
    return 'false'
  }
}
function fizzBuzz(n) {
  let answerArray = []
  for (let i = 1; i <= n; i++) {
    // Is the number a multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 === 0) {
      answerArray.push('fizzbuzz')
    } else if (i % 3 === 0) {
      // Is the number a multiple of 3?
      answerArray.push('fizz')
    } else if (i % 5 === 0) {
      answerArray.push('buzz')
    } else {
      answerArray.push(i)
    }
  }
  const str = answerArray.toString().filter('[', ',')
  console.log('string in fizzbuzz', str)
  return str
}
const checkers = {
  fib,
  anagrams,
  palindrome,
  fizzBuzz
}

export default checkers
