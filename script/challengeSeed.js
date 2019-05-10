const db = require('../server/db')
//const {User} = require('../server/db/models')
const {Challenge} = require('../server/db/models')
//const {Lesson} = require('../server/db/models')
const {Topic} = require('../server/db/models')

async function seed() {
  await db.sync()
  console.log('db synced!')
  const challenges = await Promise.all([
    Challenge.create({
      name: 'Fibonacci Series',
      sandboxId: '10rzrjn007',
      prompt:
        'Print out the n-th entry in the fibonacci series.The Fibonacci series is an ordering of numbers where each number is the sum of the preceeding two. For example, the sequence [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series.',
      functionName: 'fib',
      tests: `import fib from './index';

      test('Fib function is defined', () => {
        expect(typeof fib).toEqual('function');
      });

      test('calculates correct fib value for 1', () => {
        expect(fib(1)).toEqual(1);
      });

      test('calculates correct fib value for 2', () => {
        expect(fib(2)).toEqual(1);
      });

      test('calculates correct fib value for 3', () => {
        expect(fib(3)).toEqual(2);
      });

      test('calculates correct fib value for 4', () => {
        expect(fib(4)).toEqual(3);
      });

      test('calculates correct fib value for 39', () => {
        expect(fib(39)).toEqual(63245986);
      });`,
      solutions: [
        `function fib(n) {
          const result = [0, 1];

          for (let i = 2; i <= n; i++) {
            const a = result[i - 1];
            const b = result[i - 2];

            result.push(a + b);
          }

          return result[n];
        }`,
        `function memoize(fn) {
            const cache = {};
            return function(...args) {
              if (cache[args]) {
                return cache[args];
              }

              const result = fn.apply(this, args);
              cache[args] = result;

              return result;
            };
          }

          function slowFib(n) {
            if (n < 2) {
              return n;
            }

            return fib(n - 1) + fib(n - 2);
          }

          const fib = memoize(slowFib);`
      ],
      keywords: [
        'cache',
        'big o',
        'memoize',
        'for loop',
        'fibonacci',
        'recursion',
        'recursive',
        'iteration',
        'iterative',
        'memoization'
      ],
      examples: `Example:
      fib(4) === 3, fib(2)=== 1`,
      level: 'Easy',
      topicId: 1,
      creditTo: 'StephenGrider/AlgoCasts'
      // lessonId: 1
    }),
    Challenge.create({
      name: 'Anagrams',
      sandboxId: 'j1woxpv2o5',
      prompt: `Check to see if two provided strings are anagrams of eachother. One string is an anagram of another if it uses the same characters in the same quantity. Only consider characters, not spaces or punctuation.  Consider capital letters to be the same as lower case series.`,
      functionName: 'anagrams',
      tests: `import anagrams from './index';

      test('anagrams function exists', () => {
        expect(typeof anagrams).toEqual('function');
      });

      test('"hello" is an anagram of "llohe"', () => {
        expect(anagrams('hello', 'llohe')).toBeTruthy();
      });

      test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
        expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
      });

      test('"One One" is not an anagram of "Two two two"', () => {
        expect(anagrams('One One', 'Two two two')).toBeFalsy();
      });

      test('"One one" is not an anagram of "One one c"', () => {
        expect(anagrams('One one', 'One one c')).toBeFalsy();
      });

      test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
        expect(
          anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')
        ).toBeFalsy();
      });`,
      solutions: [
        `function anagrams(stringA, stringB) {
        return cleanString(stringA) === cleanString(stringB);
      }
      function cleanString(str) {
        return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
      }`
      ],
      keywords: ['string', 'big o', 'lowercase', 'split'],
      examples: `Example:
      anagrams('rail safety', 'fairy tales') --> True
      anagrams('RAIL! SAFETY!', 'fairy tales') --> True
      anagrams('Hi there', 'Bye there') --> False`,
      level: 'Easy',
      topicId: 2,
      creditTo: 'StephenGrider/AlgoCasts'
    }),
    Challenge.create({
      name: 'FizzBuzz',
      sandboxId: 'xl5j8lknnq',
      prompt: `Write a program that console logs the numbers from 1 to n. But for multiples of three print “fizz” instead of the number and for the multiples of five print “buzz”. For numbers which are multiples of both three and five print “fizzbuzz”.`,
      functionName: 'fizzBuzz',
      tests: `import fizzBuzz from './index';

      test('fizzBuzz function is defined', () => {
  expect(fizzBuzz).toBeDefined();
});

test('Calling fizzbuzz with 5 prints out 5 statements', () => {
  fizzBuzz(5);

  expect(console.log.mock.calls.length).toEqual(5);
});

test('Calling fizzbuzz with 15 prints out the correct values', () => {
  fizzBuzz(15);

  expect(console.log.mock.calls[0][0]).toEqual(1);
  expect(console.log.mock.calls[1][0]).toEqual(2);
  expect(console.log.mock.calls[2][0]).toEqual('fizz');
  expect(console.log.mock.calls[3][0]).toEqual(4);
  expect(console.log.mock.calls[4][0]).toEqual('buzz');
  expect(console.log.mock.calls[5][0]).toEqual('fizz');
  expect(console.log.mock.calls[6][0]).toEqual(7);
  expect(console.log.mock.calls[7][0]).toEqual(8);
  expect(console.log.mock.calls[8][0]).toEqual('fizz');
  expect(console.log.mock.calls[9][0]).toEqual('buzz');
  expect(console.log.mock.calls[10][0]).toEqual(11);
  expect(console.log.mock.calls[11][0]).toEqual('fizz');
  expect(console.log.mock.calls[12][0]).toEqual(13);
  expect(console.log.mock.calls[13][0]).toEqual(14);
  expect(console.log.mock.calls[14][0]).toEqual('fizzbuzz');
});

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});`,
      solutions: [
        `function fizzBuzz(n) {
          for (let i = 1; i <= n; i++) {
            // Is the number a multiple of 3 and 5?
            if (i % 3 === 0 && i % 5 === 0) {
              console.log('fizzbuzz');
            } else if (i % 3 === 0) {
              // Is the number a multiple of 3?
              console.log('fizz');
            } else if (i % 5 === 0) {
              console.log('buzz');
            } else {
              console.log(i);
            }
          }
        }`
      ],
      keywords: ['number', 'big o', 'for-loop', 'iterative'],
      examples: `Example:
        fizzBuzz(5);
          1
          2
          fizz
          4
          buzz
      `,
      level: 'Easy',
      topicId: 1,
      creditTo: 'StephenGrider/AlgoCasts'
    }),
    Challenge.create({
      name: ' Palindrome',
      sandboxId: '7y8j334y0',
      prompt: `Given a string, return true if the string is a palindrome or false if it is not.  Palindromes are strings that form the same word if it is reversed. *Do* include spaces and punctuation in determining if the string is a palindrome.
       `,
      functionName: 'palindrome',
      tests: `import palindrome from './index';

      test('palindrome function is defined', () => {
  expect(typeof palindrome).toEqual('function');
});

test('"aba" is a palindrome', () => {
  expect(palindrome('aba')).toBeTruthy();
});

test('" aba" is not a palindrome', () => {
  expect(palindrome(' aba')).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
  expect(palindrome('aba ')).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(palindrome('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(palindrome('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(palindrome('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(palindrome('pennep')).toBeTruthy();
});`,
      solutions: [
        `function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}`,
        `function palindrome(str) {
          const reversed = str
          .split('')
          .reverse()
          .join('');
        return str === reversed;
 }`
      ],
      keywords: ['palindrome', 'big o', 'string', 'iterative', 'split'],
      examples: `Example:
        palindrome("abba") === true,
        palindrome("abcdefg") === false
      `,
      level: 'Easy',
      topicId: 2,
      creditTo: 'StephenGrider/AlgoCasts'
    }),
    Challenge.create({
      name: ' Binary Tree',
      sandboxId: '2xo7v0l9wp',
      prompt: ` 1) Implement the Node class to create a binary search tree.  The constructor should initialize values 'data', 'left', and 'right'.
                 2) Implement the 'insert' method for the Node class.  Insert should accept an argument 'data', then create an insert a new node at the appropriate location in the tree.
                3) Implement the 'contains' method for the Node class.  Contains should accept a 'data' argument and return the Node in the tree with the same value.
               If the value isn't in the tree return null. `,
      functionName: 'Node',
      tests: `import Node from './index';
test('Node is a constructor', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

test('Node can insert correctly', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(17);

  expect(node.left.data).toEqual(5);
  expect(node.right.data).toEqual(15);
  expect(node.right.right.data).toEqual(17);
});

test('Contains returns node with the same data', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(20);
  node.insert(0);
  node.insert(-5);
  node.insert(3);

  const three = node.left.left.right;
  expect(node.contains(3)).toEqual(three);
});

test('Contains returns null if value not found', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(20);
  node.insert(0);
  node.insert(-5);
  node.insert(3);

  expect(node.contains(9999)).toEqual(null);
});
`,
      solutions: [
        `class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return this;
    }

    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }

    return null;
  }
}

module.exports = Node;
`
      ],
      keywords: ['class', 'constructor', 'optimization', 'tree', 'recursive'],
      examples: `Example:
        `,
      level: 'Hard',
      topicId: 5,
      creditTo: 'StephenGrider/AlgoCasts'
    }),
    Challenge.create({
      name: 'Chunk',
      sandboxId: '4x86845n37',
      prompt: `Given an array and chunk size, divide the array into many subarrays where each subarray is of length size`,
      functionName: 'chunk',
      tests: `import chunk from './index';
        test('function chunk exists', () => {
  expect(typeof chunk).toEqual('function');
});

test('chunk divides an array of 10 elements with chunk size 2', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunked = chunk(arr, 2);

  expect(chunked).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});

test('chunk divides an array of 3 elements with chunk size 1', () => {
  const arr = [1, 2, 3];
  const chunked = chunk(arr, 1);

  expect(chunked).toEqual([[1], [2], [3]]);
});

test('chunk divides an array of 5 elements with chunk size 3', () => {
  const arr = [1, 2, 3, 4, 5];
  const chunked = chunk(arr, 3);

  expect(chunked).toEqual([[1, 2, 3], [4, 5]]);
});

test('chunk divides an array of 13 elements with chunk size 5', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const chunked = chunk(arr, 5);

  expect(chunked).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]);
});

  
`,
      solutions: [
        `function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}`,
        `function chunk(array, size) {
   const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1];

  if (!last || last.length === size) {
      chunked.push([element]);
     } else {
       last.push(element);
    }
   }

   return chunked;
 }
`
      ],
      keywords: [
        'array',
        'set',
        'optimization',
        'subset',
        'recursive',
        'iterative'
      ],
      examples: `Example:
        chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]],
        chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]],
        chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]`,
      level: 'Medium',
      topicId: 2,
      creditTo: 'StephenGrider/AlgoCasts'
    })
  ])

  console.log(`seeded ${challenges.length} challenges`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
