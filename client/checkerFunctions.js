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
    return `Error`
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
    return `Error`
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
  try {
    const reversed = str
      .split('')
      .reverse()
      .join('')
    if (str === reversed) {
      return 'true'
    } else {
      return 'false'
    }
  } catch (err) {
    return `Error`
  }
}

function fizzBuzz(n) {
  try {
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
    const stra = answerArray.toString()
    const regex = /,/g
    const str = stra.replace('[', ',').replace(regex, ' ')

    return str
  } catch (err) {
    return `Error`
  }
}

// chunk not included in export until I can work out how to convert array into a String and keep the brackets...
function chunk(str) {
  try {
    const regex1 = /,/g
    const regex2 = / /g
    const stra = str
      .replace('[', '')
      .replace(regex1, '')
      .replace(']', '')
      .replace(regex2, '')

    const size = stra.slice(stra.length - 1)

    const array = []
    for (let i = 0; i < stra.length - 1; i++) {
      array.push(Number(stra[i]))
    }

    const chunked = []
    let index = 0

    while (index < array.length) {
      chunked.push(array.slice(index, index + size))
      index += size
    }

    return chunked
  } catch (err) {
    console.log('error in checker functions', err)
    return `Error`
  }
}

function capitalize(str) {
  try {
    console.log(str)
    let result = str[0].toUpperCase()

    for (let i = 1; i < str.length; i++) {
      if (str[i - 1] === ' ') {
        result += str[i].toUpperCase()
      } else {
        result += str[i]
      }
    }
    console.log(result)
    return result
  } catch (err) {
    console.log('error in checker functions', err)
    return `Error`
  }
}

const checkers = {
  fib,
  anagrams,
  palindrome,
  fizzBuzz,
  capitalize
}

export default checkers
