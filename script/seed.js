'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const {Challenge} = require('../server/db/models')
const { Lesson } = require('../server/db/models')
const {Topic} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123', isAdmin: 'true'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const topics = await Promise.all([
    Topic.create({ name: 'Dynamic Programming' }),
    Topic.create({ name: 'Arrays' }),
    Topic.create({ name: 'Linked Lists' }),
    Topic.create({ name: 'Hash Tables' }),
    Topic.create({ name: 'Trees' }),
    Topic.create({ name: 'None' }),
  ])
  const lessons = await Promise.all([
    Lesson.create({
      name: 'Fibonacci Number',
      description:
        'In mathematics, the Fibonacci numbers are the numbers in the following integer sequence, called the Fibonacci sequence, and characterized by the fact that every number after the first two is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...',
      reference: ['https://en.wikipedia.org/wiki/Fibonacci_number'],
      topicId:1
    }),
    Lesson.create({
      name: 'Anagrams',
      description:
        'An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.[1] For example, the word anagram can be rearranged into nag a ram, or the word binary into brainy or the word `adobe` into `abode`.',
      reference: ['https://en.wikipedia.org/wiki/Anagram'],
      topicId:2
    }),
    Lesson.create({
      name: 'FizzBuzz',
      description:
        'Fizz buzz is a group word game for children to teach them about division.[1] Players take turns to count incrementally, replacing any number divisible by three with the word "fizz", and any number divisible by five with the word "buzz"..',
      reference: ['https://en.wikipedia.org/wiki/Fizz_buzz'],
      topicId:1
    }),
    Lesson.create({
      name: 'Binary Tree',
      description:
        'In computer science, a binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child. A recursive definition using just set theory notions is that a (non-empty) binary tree is a tuple (L, S, R), where L and R are binary trees or the empty set and S is a singleton set.[1] Some authors allow the binary tree to be the empty set as well.',
      reference: ['https://en.wikipedia.org/wiki/Binary_tree'],
      topicId:5
    }),
        Lesson.create({
      name: 'Linked List',
      description:
        'In computer science, a Linked list is a linear collection of data elements, whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence. In its most basic form, each node contains: data, and a reference (in other words, a link) to the next node in the sequence.',
      reference: ['https://en.wikipedia.org/wiki/Linked_list'],
      topicId:3
        }),
         Lesson.create({
      name: 'Palindrome',
      description:
        'A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as madam or racecar or the number 10801. Sentence-length palindromes may be written when allowances are made for adjustments to capital letters, punctuation, and word dividers, such as "A man, a plan, a canal, Panama!", "Was it a car or a cat I saw?" .',
      reference: ['https://en.wikipedia.org/wiki/Palindrome'],
      topicId:3
    }),
  ])
  const challenges = await Promise.all([
    Challenge.create({
      name: 'Fibonacci Series',
      sandboxId: '10rzrjn007',
      prompt:
        'Print out the n-th entry in the fibonacci series.The Fibonacci series is an ordering of numbers where each number is the sum of the preceeding two. For example, the sequence [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series.',
      functionName: 'fib(n)',
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
        }`
      ],
      keywords: ['cache', 'big o', 'memoize'],
      examples: `Example:
      fib(4) === 3, fib(2)=== 1`,
      level: 'Easy',
      topicId: 1,
      creditTo: 'StephenGrider/AlgoCasts',
      // lessonId: 1
    }),
    Challenge.create({
      name: 'Anagrams',
      sandboxId: 'j1woxpv2o5',
      prompt: `Check to see if two provided strings are anagrams of eachother. One string is an anagram of another if it uses the same characters in the same quantity. Only consider characters, not spaces or punctuation.  Consider capital letters to be the same as lower case series.`,
      functionName: 'anagrams(stringA, stringB)',
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
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${topics.length} topics`)
  console.log(`seeded ${challenges.length} challenges`)
  console.log(`seeded ${lessons.length} lessons`)
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
