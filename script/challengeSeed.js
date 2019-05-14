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

        'memoize',
        'loop',
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
      keywords: ['string', 'lowercase', 'split'],
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
      keywords: ['number', 'loop', 'iterative'],
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
      keywords: ['palindrome', 'string', 'iterative', 'split'],
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
      examples: `Sorry there is no example for binary search tree.
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
    }
    ,
      {
          id: 10,
          name: "From Last",
          "sandboxId": "pylwokqop0",
          "prompt": "Given a linked list and integer n, return the element n  spaces from the last node in the list.  Do not call the  'size' method of the linked list.  Assume that n will always  be less than the length of the list.",
          "functionName": "fromLast",
          "tests": "import fromLast from './index' class Node {\n  constructor(data, next = null) {\n    this.data = data;\n    this.next = next;\n  }\n}\n\nclass LinkedList {\n  constructor() {\n    this.head = null;\n  }\n\n  insertFirst(data) {\n    this.head = new Node(data, this.head);\n  }\n\n  size() {\n    let counter = 0;\n    let node = this.head;\n\n    while (node) {\n      counter++;\n      node = node.next;\n    }\n\n    return counter;\n  }\n\n  getFirst() {\n    return this.head;\n  }\n\n  getLast() {\n    if (!this.head) {\n      return null;\n    }\n\n    let node = this.head;\n    while (node) {\n      if (!node.next) {\n        return node;\n      }\n      node = node.next;\n    }\n  }\n\n  clear() {\n    this.head = null;\n  }\n\n  removeFirst() {\n    if (!this.head) {\n      return;\n    }\n\n    this.head = this.head.next;\n  }\n\n  removeLast() {\n    if (!this.head) {\n      return;\n    }\n\n    if (!this.head.next) {\n      this.head = null;\n      return;\n    }\n\n    let previous = this.head;\n    let node = this.head.next;\n    while (node.next) {\n      previous = node;\n      node = node.next;\n    }\n    previous.next = null;\n  }\n\n  insertLast(data) {\n    const last = this.getLast();\n\n    if (last) {\n       There are some existing nodes in our chain\n      last.next = new Node(data);\n    } else {\n       The chain is empty!\n      this.head = new Node(data);\n    }\n  }\n\n  getAt(index) {\n    let counter = 0;\n    let node = this.head;\n    while (node) {\n      if (counter === index) {\n        return node;\n      }\n\n      counter++;\n      node = node.next;\n    }\n    return null;\n  }\n\n  removeAt(index) {\n    if (!this.head) {\n      return;\n    }\n\n    if (index === 0) {\n      this.head = this.head.next;\n      return;\n    }\n\n    const previous = this.getAt(index - 1);\n    if (!previous || !previous.next) {\n      return;\n    }\n    previous.next = previous.next.next;\n  }\n\n  insertAt(data, index) {\n    if (!this.head) {\n      this.head = new Node(data);\n      return;\n    }\n\n    if (index === 0) {\n      this.head = new Node(data, this.head);\n      return;\n    }\n\n    const previous = this.getAt(index - 1) || this.getLast();\n    const node = new Node(data, previous.next);\n    previous.next = node;\n  }\n\n  forEach(fn) {\n    let node = this.head;\n    let counter = 0;\n    while (node) {\n      fn(node, counter);\n      node = node.next;\n      counter++;\n    }\n  }\n\n  *[Symbol.iterator]() {\n    let node = this.head;\n    while (node) {\n      yield node;\n      node = node.next;\n    }\n  }\n}\n\nmodule.exports = { Node, LinkedList };",
          "solutions": [],
          "keywords": [
              "class ",
              "Linked",
              "List",
              "node"
          ],
          "examples": "const list = new List();\n    list.insertLast('a');\n    list.insertLast('b');\n    list.insertLast('c');\n    list.insertLast('d');\n    fromLast(list, 2).data  =>'b'\n",
          "level": "Hard",
          "creditTo": "Stephen Grider",
          "createdAt": "2019-05-13T18:46:25.854Z",
          "updatedAt": "2019-05-13T18:46:25.854Z",
          "topicId": 3
      },
      {
          "id": 16,
          name: "Reverse String",
          "sandboxId": "q4zqwzq3pj",
          "prompt": "Given a string, return a new string with the reversed  order of characters",
          "functionName": "reverse",
          "tests": "import reverse from './index' import reverse from \".index.js\";\ntest(\"Reverse function exists\", () => {\n  expect(reverse).toBeDefined();\n});\n\ntest(\"Reverse reverses a string\", () => {\n  expect(reverse(\"abcd\")).toEqual(\"dcba\");\n});\n\ntest(\"Reverse reverses a string\", () => {\n  expect(reverse(\"  abcd\")).toEqual(\"dcba  \");\n});",
          "solutions": [
              "function reverse(str) {\n  return str.split('').reduce((rev, char) => char + rev, '');\n}\n\nmodule.exports = reverse;",
              "function reverse(str) {\n   return str\n     .split('')\n     .reverse()\n     .join('');\n }\n",
              "function reverse(str) {\n   let reversed = '';\n\n   for (let character of str) {\n     reversed = character + reversed;\n   }\n\n   return reversed;\n }"
          ],
          "keywords": [
              "string",
              "loop",
              "array",
              "split",
              "reduce"
          ],
          "examples": "   reverse('apple') === 'leppa'\n   reverse('hello') === 'olleh'\n   reverse('Greetings!') === '!sgniteerG'",
          "level": "Easy",
          "creditTo": "Stephen Grider",
          "createdAt": "2019-05-13T21:15:16.332Z",
          "updatedAt": "2019-05-13T21:15:16.332Z",
          "topicId": 2
      },
      {
          "id": 7,
          name: "Capitalize",
          "sandboxId": "81nm9y57vj",
          "prompt": "Write a function that accepts a string.  The function should\n capitalize the first letter of each word in the string then\n return the capitalized string.",
          "functionName": "capitalize",
          "tests": "import capitalize from './index' import capitalize from \".index.js\";\n\ntest(\"Capitalize is a function\", () => {\n  expect(typeof capitalize).toEqual(\"function\");\n});\n\ntest(\"capitalizes the first letter of every word in a sentence\", () => {\n  expect(capitalize(\"hi there, how is it going?\")).toEqual(\n    \"Hi There, How Is It Going?\"\n  );\n});\n\ntest(\"capitalizes the first letter\", () => {\n  expect(capitalize(\"i love breakfast at bill miller bbq\")).toEqual(\n    \"I Love Breakfast At Bill Miller Bbq\"\n  );\n});",
          "solutions": [
              "function capitalize(str) {\n  let result = str[0].toUpperCase();\n\n  for (let i = 1; i < str.length; i++) {\n    if (str[i - 1] === ' ') {\n      result += str[i].toUpperCase();\n    } else {\n      result += str[i];\n    }\n  }\n\n  return result;\n}\n\nmodule.exports = capitalize;\n",
              "function capitalize(str) {\n   const words = [];\n\n   for (let word of str.split(' ')) {\n     words.push(word[0].toUpperCase() + word.slice(1));\n   }\n\n   return words.join(' ');\n }"
          ],
          "keywords": [
              "string",
              "loop",
              "iterative",
              "array",
              "split",
              "toUpperCase"
          ],
          "examples": "capitalize('a short sentence') --> 'A Short Sentence'\ncapitalize('look, it is working!') --> 'Look, It Is Working!'",
          "level": "Easy",
          "creditTo": "Stephen Grider",
          "createdAt": "2019-05-13T17:17:18.277Z",
          "updatedAt": "2019-05-13T17:17:18.277Z",
          "topicId": 2
      },
      {
          "id": 8,
          name: "Level Width",
          "sandboxId": "m3ovokpvw8",
          "prompt": "Given the root node of a tree, return  an array where each element is the width  of the tree at each level.",
          "functionName": "levelWidth",
          "tests": "import levelWidth from './index' import levelWidth from \".index.js\";\nimport node from \".node.js\";\n\ntest(\"levelWidth is a function\", () => {\n  expect(typeof levelWidth).toEqual(\"function\");\n});\n\ntest(\"levelWidth returns number of nodes at widest point\", () => {\n  const root = new Node(0);\n  root.add(1);\n  root.add(2);\n  root.add(3);\n  root.children[0].add(4);\n  root.children[2].add(5);\n\n  expect(levelWidth(root)).toEqual([1, 3, 2]);\n});\n\ntest(\"levelWidth returns number of nodes at widest point\", () => {\n  const root = new Node(0);\n  root.add(1);\n  root.children[0].add(2);\n  root.children[0].add(3);\n  root.children[0].children[0].add(4);\n\n  expect(levelWidth(root)).toEqual([1, 1, 2, 1]);\n});\n",
          "solutions": [
              "function levelWidth(root) {\n  const arr = [root, 's'];\n  const counters = [0];\n\n  while (arr.length > 1) {\n    const node = arr.shift();\n\n    if (node === 's') {\n      counters.push(0);\n      arr.push('s');\n    } else {\n      arr.push(...node.children);\n      counters[counters.length - 1]++;\n    }\n  }\n\n  return counters;\n}\n\nmodule.exports = levelWidth;"
          ],
          "keywords": [
              "class ",
              "node",
              "tree",
              "width",
              "counter",
              "breadth-first"
          ],
          "examples": "Given:\n     0\n    |  \\\n 1   2   3\n |       |\n 4       5\n Answer: [1, 3, 2]",
          "level": "Medium",
          "creditTo": "Stephen Grider",
          "createdAt": "2019-05-13T18:15:33.886Z",
          "updatedAt": "2019-05-13T18:15:33.886Z",
          "topicId": 5
      },
      {
          "id": 5,
          name: " Binary Tree",
          "sandboxId": "2xo7v0l9wp",
          "prompt": " 1) Implement the Node class to create a binary search tree.  The constructor should initialize values 'data', 'left', and 'right'.\n                 2) Implement the 'insert' method for the Node class.  Insert should accept an argument 'data', then create an insert a new node at the appropriate location in the tree.\n                3) Implement the 'contains' method for the Node class.  Contains should accept a 'data' argument and return the Node in the tree with the same value.\n               If the value isn't in the tree return null. ",
          "functionName": "Node",
          "tests": "import Node from './index';\ntest('Node is a constructor', () => {\n  expect(typeof Node.prototype.constructor).toEqual('function');\n});\n\ntest('Node can insert correctly', () => {\n  const node = new Node(10);\n  node.insert(5);\n  node.insert(15);\n  node.insert(17);\n\n  expect(node.left.data).toEqual(5);\n  expect(node.right.data).toEqual(15);\n  expect(node.right.right.data).toEqual(17);\n});\n\ntest('Contains returns node with the same data', () => {\n  const node = new Node(10);\n  node.insert(5);\n  node.insert(15);\n  node.insert(20);\n  node.insert(0);\n  node.insert(-5);\n  node.insert(3);\n\n  const three = node.left.left.right;\n  expect(node.contains(3)).toEqual(three);\n});\n\ntest('Contains returns null if value not found', () => {\n  const node = new Node(10);\n  node.insert(5);\n  node.insert(15);\n  node.insert(20);\n  node.insert(0);\n  node.insert(-5);\n  node.insert(3);\n\n  expect(node.contains(9999)).toEqual(null);\n});\n",
          "solutions": [
              "class Node {\n  constructor(data) {\n    this.data = data;\n    this.left = null;\n    this.right = null;\n  }\n\n  insert(data) {\n    if (data < this.data && this.left) {\n      this.left.insert(data);\n    } else if (data < this.data) {\n      this.left = new Node(data);\n    } else if (data > this.data && this.right) {\n      this.right.insert(data);\n    } else if (data > this.data) {\n      this.right = new Node(data);\n    }\n  }\n\n  contains(data) {\n    if (this.data === data) {\n      return this;\n    }\n\n    if (this.data < data && this.right) {\n      return this.right.contains(data);\n    } else if (this.data > data && this.left) {\n      return this.left.contains(data);\n    }\n\n    return null;\n  }\n}\n\nmodule.exports = Node;\n"
          ],
          "keywords": [
              "class",
              "constructor",
              "optimization",
              "tree",
              "recursive"
          ],
          "examples": "Sorry, we do not have an example for this",
          "level": "Hard",
          "creditTo": "StephenGrider/AlgoCasts",
          "createdAt": "2019-05-10T18:57:18.228Z",
          "updatedAt": "2019-05-10T18:57:18.228Z",
          "topicId": 5
      },
      {
          "id": 12,
          name: "Max Character",
          "sandboxId": "mzx3lwmoqp",
          "prompt": "Given a string, return the character that is most   commonly used in the string.",
          "functionName": "maxChar",
          "tests": "import maxChar from './index' const maxChar = require('.index');\n\ntest('maxChar function exists', () => {\n  expect(typeof maxChar).toEqual('function');\n});\n\ntest('Finds the most frequently used char', () => {\n  expect(maxChar('a')).toEqual('a');\n  expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');\n});\n\ntest('Works with numbers in the string', () => {\n  expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');\n});",
          "solutions": [
              "function maxChar(str) {\n  const charMap = {};\n  let max = 0;\n  let maxChar = '';\n\n  for (let char of str) {\n    if (charMap[char]) {\n      charMap[char]++;\n    } else {\n      charMap[char] = 1;\n    }\n  }\n\n  for (let char in charMap) {\n    if (charMap[char] > max) {\n      max = charMap[char];\n      maxChar = char;\n    }\n  }\n\n  return maxChar;\n}\n\nmodule.exports = maxChar;"
          ],
          "keywords": [
              "string",
              "loop",
              "object"
          ],
          "examples": "maxChar(\"abcccccccd\") === \"c\"\n maxChar(\"apple 1231111\") === \"1\"",
          "level": "Easy",
          "creditTo": "Stephen Grider",
          "createdAt": "2019-05-13T19:14:52.137Z",
          "updatedAt": "2019-05-13T19:14:52.137Z",
          "topicId": 2
      },
      {
          "id": 9,
          name: "Circular",
          "sandboxId": "4xv9pzknq4",
          "prompt": "Given a linked list, return true if the list   is circular, false if it is not.",
          "functionName": "circular",
          "tests": "import circular from './index' const circular = require('.index');\nconst L = require('.linkedlist');\nconst List = L.LinkedList;\nconst Node = L.Node;\n\ntest('circular function is defined', () => {\n  expect(typeof circular).toEqual('function');\n});\n\ntest('circular detects circular linked lists', () => {\n  const l = new List();\n  const a = new Node('a');\n  const b = new Node('b');\n  const c = new Node('c');\n\n  l.head = a;\n  a.next = b;\n  b.next = c;\n  c.next = b;\n\n  expect(circular(l)).toEqual(true);\n});\n\ntest('circular detects circular linked lists linked at the head', () => {\n  const l = new List();\n  const a = new Node('a');\n  const b = new Node('b');\n  const c = new Node('c');\n\n  l.head = a;\n  a.next = b;\n  b.next = c;\n  c.next = a;\n\n  expect(circular(l)).toEqual(true);\n});\n\ntest('circular detects non-circular linked lists', () => {\n  const l = new List();\n  const a = new Node('a');\n  const b = new Node('b');\n  const c = new Node('c');\n\n  l.head = a;\n  a.next = b;\n  b.next = c;\n  c.next = null;\n\n  expect(circular(l)).toEqual(false);\n});",
          "solutions": [
              "function circular(list) {\n  let slow = list.getFirst();\n  let fast = list.getFirst();\n\n  while (fast.next && fast.next.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n\n    if (slow === fast) {\n      return true;\n    }\n  }\n\n  return false;\n}\n\nmodule.exports = circular;"
          ],
          "keywords": [
              "class ",
              "list",
              "linked"
          ],
          "examples": "const l = new List();\n   const a = new Node('a');\n   const b = new Node('b');\n   const c = new Node('c');\n   l.head = a;\n   a.next = b;\n   b.next = c;\n   c.next = b;\n   circular(l)  true",
          "level": "Medium",
          "creditTo": "Stephen Grider",
          "createdAt": "2019-05-13T18:29:42.997Z",
          "updatedAt": "2019-05-13T18:29:42.997Z",
          "topicId": 3
      },
      {
          "id": 11,
          name: "Matrix",
          "sandboxId": "vrx1lk4m5",
          "prompt": "Write a function that accepts an integer N   and returns a NxN spiral matrix.",
          "functionName": "matrix",
          "tests": "import matrix from './index' const matrix = require('.index');\n\ntest('matrix is a function', () => {\n  expect(typeof matrix).toEqual('function');\n});\n\ntest('matrix produces a 2x2 array', () => {\n  const m = matrix(2);\n  expect(m.length).toEqual(2);\n  expect(m[0]).toEqual([1, 2]);\n  expect(m[1]).toEqual([4, 3]);\n});\n\ntest('matrix produces a 3x3 array', () => {\n  const m = matrix(3);\n  expect(m.length).toEqual(3);\n  expect(m[0]).toEqual([1, 2, 3]);\n  expect(m[1]).toEqual([8, 9, 4]);\n  expect(m[2]).toEqual([7, 6, 5]);\n});\n\ntest('matrix produces a 4x4 array', () => {\n  const m = matrix(4);\n  expect(m.length).toEqual(4);\n  expect(m[0]).toEqual([1, 2, 3, 4]);\n  expect(m[1]).toEqual([12, 13, 14, 5]);\n  expect(m[2]).toEqual([11, 16, 15, 6]);\n  expect(m[3]).toEqual([10, 9, 8, 7]);\n});\n",
          "solutions": [
              "function matrix(n) {\n  const results = [];\n\n  for (let i = 0; i < n; i++) {\n    results.push([]);\n  }\n\n  let counter = 1;\n  let startColumn = 0;\n  let endColumn = n - 1;\n  let startRow = 0;\n  let endRow = n - 1;\n  while (startColumn <= endColumn && startRow <= endRow) {\n     Top row\n    for (let i = startColumn; i <= endColumn; i++) {\n      results[startRow][i] = counter;\n      counter++;\n    }\n    startRow++;\n\n     Right column\n    for (let i = startRow; i <= endRow; i++) {\n      results[i][endColumn] = counter;\n      counter++;\n    }\n    endColumn--;\n\n     Bottom row\n    for (let i = endColumn; i >= startColumn; i--) {\n      results[endRow][i] = counter;\n      counter++;\n    }\n    endRow--;\n\n     start column\n    for (let i = endRow; i >= startRow; i--) {\n      results[i][startColumn] = counter;\n      counter++;\n    }\n    startColumn++;\n  }\n\n  return results;\n}\n\nmodule.exports = matrix;\n"
          ],
          "keywords": [
              "loop",
              "iterative",
              "pointer"
          ],
          "examples": "matrix(3)\n     [[1, 2, 3],\n     [8, 9, 4],\n     [7, 6, 5]]\n  matrix(4)\n     [[1,   2,  3, 4],\n     [12, 13, 14, 5],\n     [11, 16, 15, 6],\n     [10,  9,  8, 7]]",
          "level": "Hard",
          "creditTo": "Stephen Grider",
          "createdAt": "2019-05-13T19:08:31.180Z",
          "updatedAt": "2019-05-13T19:08:31.180Z",
          "topicId": 1
      },
      {
          "id": 15,
          name: "Reverse Integer",
          "sandboxId": "xvrpnly5v4",
          "prompt": "Given an integer, return an integer that is the reverse  ordering of numbers.",
          "functionName": "reverseInt",
          "tests": "import reverseInt from './index' import reverseInt from \".index.js\";\ntest(\"ReverseInt function exists\", () => {\n  expect(reverseInt).toBeDefined();\n});\n\ntest(\"ReverseInt handles 0 as an input\", () => {\n  expect(reverseInt(0)).toEqual(0);\n});\n\ntest(\"ReverseInt flips a positive number\", () => {\n  expect(reverseInt(5)).toEqual(5);\n  expect(reverseInt(15)).toEqual(51);\n  expect(reverseInt(90)).toEqual(9);\n  expect(reverseInt(2359)).toEqual(9532);\n});\n\ntest(\"ReverseInt flips a negative number\", () => {\n  expect(reverseInt(-5)).toEqual(-5);\n  expect(reverseInt(-15)).toEqual(-51);\n  expect(reverseInt(-90)).toEqual(-9);\n  expect(reverseInt(-2359)).toEqual(-9532);\n});",
          "solutions": [
              "function reverseInt(n) {\n  const reversed = n\n    .toString()\n    .split('')\n    .reverse()\n    .join('');\n\n  return parseInt(reversed) * Math.sign(n);\n}\n\nmodule.exports = reverseInt;"
          ],
          "keywords": [
              "string",
              "split",
              "reverse",
              "join"
          ],
          "examples": "reverseInt(15) === 51\nreverseInt(-15) === -51\n reverseInt(-90) === -9",
          "level": "Easy",
          "creditTo": "Stephen Grider",
          "createdAt": "2019-05-13T20:54:11.586Z",
          "updatedAt": "2019-05-13T20:54:11.586Z",
          "topicId": 2
      },
      {
          "id": 6,
          name: "Chunk",
          "sandboxId": "4x86845n37",
          "prompt": "Given an array and chunk size, divide the array into many subarrays where each subarray is of length size",
          "functionName": "chunk",
          "tests": "import chunk from './index';\n        test('function chunk exists', () => {\n  expect(typeof chunk).toEqual('function');\n});\n\ntest('chunk divides an array of 10 elements with chunk size 2', () => {\n  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n  const chunked = chunk(arr, 2);\n\n  expect(chunked).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);\n});\n\ntest('chunk divides an array of 3 elements with chunk size 1', () => {\n  const arr = [1, 2, 3];\n  const chunked = chunk(arr, 1);\n\n  expect(chunked).toEqual([[1], [2], [3]]);\n});\n\ntest('chunk divides an array of 5 elements with chunk size 3', () => {\n  const arr = [1, 2, 3, 4, 5];\n  const chunked = chunk(arr, 3);\n\n  expect(chunked).toEqual([[1, 2, 3], [4, 5]]);\n});\n\ntest('chunk divides an array of 13 elements with chunk size 5', () => {\n  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];\n  const chunked = chunk(arr, 5);\n\n  expect(chunked).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]);\n});\n\n  \n",
          "solutions": [
              "function chunk(array, size) {\n  const chunked = [];\n  let index = 0;\n\n  while (index < array.length) {\n    chunked.push(array.slice(index, index + size));\n    index += size;\n  }\n\n  return chunked;\n}",
              "function chunk(array, size) {\n   const chunked = [];\n\n  for (let element of array) {\n    const last = chunked[chunked.length - 1];\n\n  if (!last || last.length === size) {\n      chunked.push([element]);\n     } else {\n       last.push(element);\n    }\n   }\n\n   return chunked;\n }\n"
          ],
          "keywords": [
              "array",
              "set",
              "optimization",
              "subset",
              "recursive",
              "iterative"
          ],
          "examples": "        chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]],\n        chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]],\n        chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]",
          "level": "Medium",
          "creditTo": "StephenGrider/AlgoCasts",
          "createdAt": "2019-05-10T18:57:18.228Z",
          "updatedAt": "2019-05-10T18:57:18.228Z",
          "topicId": 2
      },
      {
          "id": 4,
          name: " Palindrome",
          "sandboxId": "7y8j334y0",
          "prompt": "Given a string, return true if the string is a palindrome or false if it is not.  Palindromes are strings that form the same word if it is reversed. *Do* include spaces and punctuation in determining if the string is a palindrome.\n       ",
          "functionName": "palindrome",
          "tests": "import palindrome from './index';\n\n      test('palindrome function is defined', () => {\n  expect(typeof palindrome).toEqual('function');\n});\n\ntest('\"aba\" is a palindrome', () => {\n  expect(palindrome('aba')).toBeTruthy();\n});\n\ntest('\" aba\" is not a palindrome', () => {\n  expect(palindrome(' aba')).toBeFalsy();\n});\n\ntest('\"aba \" is not a palindrome', () => {\n  expect(palindrome('aba ')).toBeFalsy();\n});\n\ntest('\"greetings\" is not a palindrome', () => {\n  expect(palindrome('greetings')).toBeFalsy();\n});\n\ntest('\"1000000001\" a palindrome', () => {\n  expect(palindrome('1000000001')).toBeTruthy();\n});\n\ntest('\"Fish hsif\" is not a palindrome', () => {\n  expect(palindrome('Fish hsif')).toBeFalsy();\n});\n\ntest('\"pennep\" a palindrome', () => {\n  expect(palindrome('pennep')).toBeTruthy();\n});",
          "solutions": [
              "function palindrome(str) {\n  return str.split('').every((char, i) => {\n    return char === str[str.length - i - 1];\n  });\n}",
              "function palindrome(str) {\n          const reversed = str\n          .split('')\n          .reverse()\n          .join('');\n        return str === reversed;\n }"
          ],
          "keywords": [
              "palindrome",
              "string",
              "iterative",
              "split"
          ],
          "examples": "\n        palindrome(\"abba\") === true,\n        palindrome(\"abcdefg\") === false\n      ",
          "level": "Easy",
          "creditTo": "StephenGrider/AlgoCasts",
          "createdAt": "2019-05-10T18:57:18.227Z",
          "updatedAt": "2019-05-10T18:57:18.227Z",
          "topicId": 2
      },
      {
          "id": 13,
          name: "MidPoint of List",
          "sandboxId": "72xoz6njx",
          "prompt": "Return the 'middle' node of a linked list.  If the list has an even number of elements, return\n the node at the end of the first half of the list.  *Do not* use a counter variable, *do not* retrieve  the size of the list, and only iterate  through the list one time.",
          "functionName": "midpoint",
          "tests": "import midpoint from './index' const midpoint = require('.index');\nconst L = require('.linkedlist');\nconst Node = L.Node;\nconst LinkedList = L.LinkedList;\n\ntest('Midpoint is a function', () => {\n  expect(typeof midpoint).toEqual('function');\n});\n\ndescribe('Midpoint returns the middle node of an odd numbered list', () => {\n  test('when the list has 3 elements', () => {\n    const l = new LinkedList();\n    l.insertLast('a');\n    l.insertLast('b');\n    l.insertLast('c');\n    expect(midpoint(l).data).toEqual('b');\n  });\n\n  test('when the list has 5 elements', () => {\n    const l = new LinkedList();\n    l.insertLast('a');\n    l.insertLast('b');\n    l.insertLast('c');\n    l.insertLast('d');\n    l.insertLast('e');\n    expect(midpoint(l).data).toEqual('c');\n  });\n});\n\ndescribe('Midpoint returns the middle node of an even numbered list', () => {\n  test('when the list has 2 elements', () => {\n    const l = new LinkedList();\n    l.insertLast('a');\n    l.insertLast('b');\n    expect(midpoint(l).data).toEqual('a');\n  });\n\n  test('when the list has 4 elements', () => {\n    const l = new LinkedList();\n    l.insertLast('a');\n    l.insertLast('b');\n    l.insertLast('c');\n    l.insertLast('d');\n    expect(midpoint(l).data).toEqual('b');\n  });\n});\n",
          "solutions": [
              "function midpoint(list) {\n  let slow = list.getFirst();\n  let fast = list.getFirst();\n\n  while (fast.next && fast.next.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n  }\n\n  return slow;\n}\n\nmodule.exports = midpoint;"
          ],
          "keywords": [
              "class ",
              "linked",
              "list",
              "iterative"
          ],
          "examples": "const l = new LinkedList();\n   l.insertLast('a')\n   l.insertLast('b')\n   l.insertLast('c')\n   midpoint(l); => returns { data: 'b' }",
          "level": "Medium",
          "creditTo": "Stephen Grider",
          "createdAt": "2019-05-13T19:41:33.857Z",
          "updatedAt": "2019-05-13T19:41:33.857Z",
          "topicId": 3
      },
      {
          "id": 14,
          name: "Pyramid",
          "sandboxId": "6jn5qm4nzk",
          "prompt": "Write a function that accepts a positive number N.   The function should console log a pyramid shape  with N levels using the # character.  Make sure the pyramid has spaces on both the left *and* right hand sides",
          "functionName": "pyramid",
          "tests": "import pyramid  from './index' fgny",
          "solutions": [
              "function pyramid(n, row = 0, level = '') {\n  if (row === n) {\n    return;\n  }\n\n  if (level.length === 2 * n - 1) {\n    console.log(level);\n    return pyramid(n, row + 1);\n  }\n\n  const midpoint = Math.floor((2 * n - 1) / 2);\n  let add;\n  if (midpoint - row <= level.length && midpoint + row >= level.length) {\n    add = '#';\n  } else {\n    add = ' ';\n  }\n  pyramid(n, row, level + add);\n}\n\nmodule.exports = pyramid;"
          ],
          "keywords": [
              "loop",
              "pointer",
              "iterative"
          ],
          "examples": "   pyramid(1)\n     '#'\n  pyramid(2)\n      ' # '\n     '###'\n  pyramid(3)\n      '  #  '\n      ' ### '   \n    '#####'",
          "level": "Medium",
          "creditTo": "Stephen Grider",
          "createdAt": "2019-05-13T20:34:25.593Z",
          "updatedAt": "2019-05-13T20:34:25.593Z",
          "topicId": 6
      },
      {
          "id": 3,
          name: "FizzBuzz",
          "sandboxId": "xl5j8lknnq",
          "prompt": "Write a program that console logs the numbers from 1 to n. But for multiples of three print “fizz” instead of the number and for the multiples of five print “buzz”. For numbers which are multiples of both three and five print “fizzbuzz”.",
          "functionName": "fizzBuzz",
          "tests": "import fizzBuzz from './index';\n\n      test('fizzBuzz function is defined', () => {\n  expect(fizzBuzz).toBeDefined();\n});\n\ntest('Calling fizzbuzz with 5 prints out 5 statements', () => {\n  fizzBuzz(5);\n\n  expect(console.log.mock.calls.length).toEqual(5);\n});\n\ntest('Calling fizzbuzz with 15 prints out the correct values', () => {\n  fizzBuzz(15);\n\n  expect(console.log.mock.calls[0][0]).toEqual(1);\n  expect(console.log.mock.calls[1][0]).toEqual(2);\n  expect(console.log.mock.calls[2][0]).toEqual('fizz');\n  expect(console.log.mock.calls[3][0]).toEqual(4);\n  expect(console.log.mock.calls[4][0]).toEqual('buzz');\n  expect(console.log.mock.calls[5][0]).toEqual('fizz');\n  expect(console.log.mock.calls[6][0]).toEqual(7);\n  expect(console.log.mock.calls[7][0]).toEqual(8);\n  expect(console.log.mock.calls[8][0]).toEqual('fizz');\n  expect(console.log.mock.calls[9][0]).toEqual('buzz');\n  expect(console.log.mock.calls[10][0]).toEqual(11);\n  expect(console.log.mock.calls[11][0]).toEqual('fizz');\n  expect(console.log.mock.calls[12][0]).toEqual(13);\n  expect(console.log.mock.calls[13][0]).toEqual(14);\n  expect(console.log.mock.calls[14][0]).toEqual('fizzbuzz');\n});\n\nbeforeEach(() => {\n  jest.spyOn(console, 'log');\n});\n\nafterEach(() => {\n  console.log.mockRestore();\n});",
          "solutions": [
              "function fizzBuzz(n) {\n          for (let i = 1; i <= n; i++) {\n            // Is the number a multiple of 3 and 5?\n            if (i % 3 === 0 && i % 5 === 0) {\n              console.log('fizzbuzz');\n            } else if (i % 3 === 0) {\n              // Is the number a multiple of 3?\n              console.log('fizz');\n            } else if (i % 5 === 0) {\n              console.log('buzz');\n            } else {\n              console.log(i);\n            }\n          }\n        }"
          ],
          "keywords": [
              "number",
              "loop",
              "iterative"
          ],
          "examples": "       fizzBuzz(5);\n          1\n          2\n          fizz\n          4\n          buzz\n      ",
          "level": "Easy",
          "creditTo": "StephenGrider/AlgoCasts",
          "createdAt": "2019-05-10T18:57:18.227Z",
          "updatedAt": "2019-05-10T18:57:18.227Z",
          "topicId": 1
      },
      {
          "id": 2,
          "name": "Anagrams",
          "sandboxId": "j1woxpv2o5",
          "prompt": "Check to see if two provided strings are anagrams of eachother. One string is an anagram of another if it uses the same characters in the same quantity. Only consider characters, not spaces or punctuation.  Consider capital letters to be the same as lower case series.",
          "functionName": "anagrams",
          "tests": "import anagrams from './index';\n\n      test('anagrams function exists', () => {\n        expect(typeof anagrams).toEqual('function');\n      });\n\n      test('\"hello\" is an anagram of \"llohe\"', () => {\n        expect(anagrams('hello', 'llohe')).toBeTruthy();\n      });\n\n      test('\"Whoa! Hi!\" is an anagram of \"Hi! Whoa!\"', () => {\n        expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();\n      });\n\n      test('\"One One\" is not an anagram of \"Two two two\"', () => {\n        expect(anagrams('One One', 'Two two two')).toBeFalsy();\n      });\n\n      test('\"One one\" is not an anagram of \"One one c\"', () => {\n        expect(anagrams('One one', 'One one c')).toBeFalsy();\n      });\n\n      test('\"A tree, a life, a bench\" is not an anagram of \"A tree, a fence, a yard\"', () => {\n        expect(\n          anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')\n        ).toBeFalsy();\n      });",
          "solutions": [
              "function anagrams(stringA, stringB) {\n        return cleanString(stringA) === cleanString(stringB);\n      }\n      function cleanString(str) {\n        return str\n        .replace(/[^w]/g, '')\n        .toLowerCase()\n        .split('')\n        .sort()\n        .join('');\n      }"
          ],
          "keywords": [
              "string",
              "lowercase",
              "split"
          ],
          "examples": "     anagrams('rail safety', 'fairy tales') --> True\n      anagrams('RAIL! SAFETY!', 'fairy tales') --> True\n      anagrams('Hi there', 'Bye there') --> False",
          "level": "Easy",
          "creditTo": "StephenGrider/AlgoCasts",
          "createdAt": "2019-05-10T18:57:18.227Z",
          "updatedAt": "2019-05-10T18:57:18.227Z",
          "topicId": 2
      },
      {
          "id": 1,
          "name": "Fibonacci Series",
          "sandboxId": "10rzrjn007",
          "prompt": "Print out the n-th entry in the fibonacci series.The Fibonacci series is an ordering of numbers where each number is the sum of the preceeding two. For example, the sequence [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series.",
          "functionName": "fib",
          "tests": "import fib from './index';\n\n      test('Fib function is defined', () => {\n        expect(typeof fib).toEqual('function');\n      });\n\n      test('calculates correct fib value for 1', () => {\n        expect(fib(1)).toEqual(1);\n      });\n\n      test('calculates correct fib value for 2', () => {\n        expect(fib(2)).toEqual(1);\n      });\n\n      test('calculates correct fib value for 3', () => {\n        expect(fib(3)).toEqual(2);\n      });\n\n      test('calculates correct fib value for 4', () => {\n        expect(fib(4)).toEqual(3);\n      });\n\n      test('calculates correct fib value for 39', () => {\n        expect(fib(39)).toEqual(63245986);\n      });",
          "solutions": [
              "function fib(n) {\n          const result = [0, 1];\n\n          for (let i = 2; i <= n; i++) {\n            const a = result[i - 1];\n            const b = result[i - 2];\n\n            result.push(a + b);\n          }\n\n          return result[n];\n        }",
              "function memoize(fn) {\n            const cache = {};\n            return function(...args) {\n              if (cache[args]) {\n                return cache[args];\n              }\n\n              const result = fn.apply(this, args);\n              cache[args] = result;\n\n              return result;\n            };\n          }\n\n          function slowFib(n) {\n            if (n < 2) {\n              return n;\n            }\n\n            return fib(n - 1) + fib(n - 2);\n          }\n\n          const fib = memoize(slowFib);"
          ],
          "keywords": [
              "cache",
              "memoize",
              "loop",
              "fibonacci",
              "recursion",
              "recursive",
              "iteration",
              "iterative",
              "memoization"
          ],
          "examples": "      fib(4) === 3, fib(2)=== 1",
          "level": "Easy",
          "creditTo": "StephenGrider/AlgoCasts",
          "createdAt": "2019-05-10T18:57:18.219Z",
          "updatedAt": "2019-05-10T18:57:18.219Z",
          "topicId": 1
      }
  
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
