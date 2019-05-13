const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Challenge = db.model('challenge')

describe('Challenge routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/challenges/', () => {
    const exampleProblem = {
      name: 'Fibonacci Series',
      sandboxId: '10rzrjn007',
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
      topic: 'topic',
      examples: `Example:
        fib(4) === 3, fib(2)=== 1`
    }
    const exampleProblem2 = {
      name: 'Test Series',
      sandboxId: '10007',
      prompt: `
           Test
           `,
      functionName: 'test(n)',
      tests: `import test from './index'`,
      solutions: [
        `sol1`,
        `
                sol2`
      ],
      topic: '',
      keywords: ['cache'],
      examples: `Example:
        `
    }

    beforeEach(() => {
      return Challenge.create(exampleProblem)
    })

    it('GET /api/challenges', async () => {
      const res = await request(app)
        .get('/api/challenges')
        .redirects(1)
        .expect(200)

      expect(res.body).to.be.an('array')

      expect(res.body[0].name).to.be.equal(exampleProblem.name)
    })
    it('POST /api/challenges', async () => {
      const res = await request(app)
        .post('/api/challenges')
        .send(exampleProblem2)
        .expect(200)

      expect(res.body.name).to.be.equal(exampleProblem2.name)
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
