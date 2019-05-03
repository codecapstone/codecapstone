const exampleProblem = {
  name: 'Fibonacci Series',
  prompt: `
     Print out the n-th entry in the fibonacci series.
     The fibonacci series is an ordering of numbers where
     each number is the sum of the preceeding two.
     For example, the sequence
      [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
     forms the first ten entries of the fibonacci series.
     Example:
      fib(4) === 3`,
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
    'big O',
    'memoize',
    'for loop',
    'Fibonacci',
    'recursion',
    'recursive',
    'iteration',
    'iterative',
    'memoization'
  ]
}

export default exampleProblem
