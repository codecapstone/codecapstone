const {expect} = require('chai')
const db = require('../index')
const Challenge = db.model('challenge')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })
  let example
  beforeEach(async () => {
    example = await Challenge.build({
      name: 'Fibonacci Series',
      prompt: `
     Print out the n-th entry in the fibonacci series.
     The fibonacci series is an ordering of numbers where
     each number is the sum of the preceeding two.
     For example, the sequence
      [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
     forms the first ten entries of the fibonacci series.
     `,
  functionName: 'fib(n)',
  tests: `import fib from './index';

      test('Fib function is defined', () => {
        expect(typeof fib).toEqual('function');
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
        }`],
  keywords: [
    'cache',
    'big o',
    'memoize',],
  examples: `Example:
  fib(4) === 3, fib(2)=== 1`
      });

  })
  
  describe('definition of atttributes', () => {
    it('includes `name`,`prompt`,`functionName`,`tests`,`solutions`, `keywords`,`examples`', () => {
      expect(example.name).to.equal('Fibonacci Series')
    })
  })
  })



