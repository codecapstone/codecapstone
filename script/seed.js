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
    await Topic.create({name: 'Strings'}),
    await Topic.create({name: 'Numbers'}),
    await Topic.create({name: 'Linked Lists'}),
    //await Topic.create({name: 'Hash Tables'}),
    await Topic.create({name: 'Trees'}),
    await Topic.create({name: 'Miscellaneous'})
  ])
  const lessons = await Promise.all([
    await Lesson.create({
      name: 'Strings',
      description: `     In computer programming, a string is traditionally a sequence of characters, either as a literal constant or as some kind of variable. The latter may allow its elements to be mutated and the length changed, or it may be fixed (after creation). A string is generally considered a data type and is often implemented as an array data structure of bytes (or words) that stores a sequence of elements, typically characters, using some character encoding. String may also denote more general arrays or other sequence (or list) data types and structures.
             Some examples of String Problems are Anagrams, Palindrome, Reverse String`,
      reference: [
        'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
      ],
      topicId: 1
    }),
    await Lesson.create({
      name: 'Numbers',
      description: `In computer programming, numbers can be of different types - DECIMAL, BINARY, HEXADECIMAL.
         Computers represent data in sets of BINARY digits. The representation is composed of bits, which in turn are grouped into larger sets such as bytes.A bit is a binary digit that represents one of two states. The concept of a bit can be understood as a value of either 1 or 0, on or off, yes or no, true or false, or encoded by a switch or toggle of some kind.
         The HEXADECIMAL numeral system, often shortened to "hex", is a numeral system made up of 16 symbols (base 16). The standard numeral system is called decimal (base 10) and uses ten symbols: 0,1,2,3,4,5,6,7,8,9. Hexadecimal uses the decimal numbers and six extra symbols. There are no numerical symbols that represent values greater than ten, so letters taken from the English alphabet are used, specifically A, B, C, D, E and F. Hexadecimal A = decimal 10, and hexadecimal F = decimal 15.
         The DECIMAL numeral system (also called base-ten positional numeral system, and occasionally called denary) is the standard system for denoting integer and non-integer numbers. 
            Some examples are Fibonacci sequence, Matrix, reverse an Integer`,
      reference: [
        'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number'
      ],
      topicId: 2
    }),
    await Lesson.create({
      name: 'Linked List',
      description:
        'In computer science, a Linked list is a linear collection of data elements, whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence. In its most basic form, each node contains: data, and a reference (in other words, a link) to the next node in the sequence.',
      reference: ['https://en.wikipedia.org/wiki/Linked_list'],
      topicId: 3
    }),
    await Lesson.create({
      name: 'Binary Tree',
      description:
        'In computer science, a binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child. A recursive definition using just set theory notions is that a (non-empty) binary tree is a tuple (L, S, R), where L and R are binary trees or the empty set and S is a singleton set.[1] Some authors allow the binary tree to be the empty set as well.',
      reference: ['https://en.wikipedia.org/wiki/Binary_tree'],
      topicId: 4
    }),
    await Lesson.create({
      name: 'Miscellaneous',
      description: `Apart from data structure-based questions, most of the programming job interviews also ask algorithm, design, bit manipulation, and general logic-based questions. These type of questions come under this topic.
        Some examples are Pyramid, implementing the sort algorithms, etc`,
      reference: [
        'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects'
      ],
      topicId: 5
    })
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
