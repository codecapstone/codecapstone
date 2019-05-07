
  const  challenge1 = {
    name: 'Fibonacci Series',
    sandboxId: '10rzrjn007',
      prompt: 'Print out the n-th entry in the fibonacci series.The Fibonacci series is an ordering of numbers where each number is the sum of the preceeding two. For example, the sequence [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series.',
    functionName: 'fib(n)',
    // tests: 'tests',
    //   solutions: ['solutions'],
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
      // solutions: [
      `function fib(n) {
          const result = [0, 1];

          for (let i = 2; i <= n; i++) {
            const a = result[i - 1];
            const b = result[i - 2];

            result.push(a + b);
          }

          return result[n];
        }`],
      keywords: [
        'cache',
        'big o',
        'memoize'
    ],
      examples: 'Example'
      // examples: 'Example':
      // fib(4) === 3, fib(2)=== 1'
    }
    Challenge.create({
      name: 'Anagrams',
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
      }`,
      `function cleanString(str) {
        return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
      }`,
      ],
      keywords: [
        'string',
        'big o',
        'lowercase',
        'split'
      ],
      examples: `Example:
      anagrams('rail safety', 'fairy tales') --> True
      anagrams('RAIL! SAFETY!', 'fairy tales') --> True
      anagrams('Hi there', 'Bye there') --> False`
    })
  
  // console.log(`seeded ${challenges.length} challenges`)
  // console.log(`seeded successfully`)


// async function runSeed() {
//   console.log('seeding...')
//   try {
//     await seed()
//   } catch (err) {
//     console.error(err)
//     process.exitCode = 1
//   } finally {
//     console.log('closing db connection')
//     await db.close()
//     console.log('db connection closed')
//   }
// }

// if (module === require.main) {
//   runSeed()

const challenges = [challenge1]

module.exports = challenges