const fib = n => {
  const n1 = Number(n)
  const result = [0, 1]

  for (let i = 2; i <= n1; i++) {
    const a = result[i - 1]
    const b = result[i - 2]

    result.push(a + b)
  }

  let num = result[n1]

  return num.toString()
}

const checkers = {
  fib
}
export default checkers
