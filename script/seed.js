'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')

const {Lesson} = require('../server/db/models')
const {Topic} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123', isAdmin: 'true'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const topics = await Promise.all([
   await Topic.create({name: 'Dynamic Programming'}),
   await Topic.create({name: 'Arrays'}),
    await Topic.create({name: 'Linked Lists'}),
    await Topic.create({name: 'Hash Tables'}),
    await Topic.create({name: 'Trees'}),
    await Topic.create({name: 'Miscellaneous'})
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
  

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${topics.length} topics`)
  
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
