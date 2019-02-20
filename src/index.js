module.exports = function getZerosCount(number, base) {
  const simples = getSimples(base)

  const powers = simples.map(simple => {
    return {simple, power: getPower(base, simple)}
  })

  let zeros = []
  powers.forEach(({simple, power}) => {
    if (power === 0) return
    let sum = 0
    let rest = number
    while (rest > simple) {
      rest = rest / simple
      sum += Math.floor(rest)
    }
    zeros.push(Math.floor(sum / power))
  })

  return Math.min(...zeros)
};

const getPower = (number, simple) => {
  let power = 0
  let rest = 0
  while (!rest) {
    power++
    rest = number % (simple**power)
  }
  return power-1
}

const getSimples = (base) => {
  let simples = []
  for (let i = 2; i <= base; i++) {
    if (isSimple(i)) simples.push(i)
  }
  return simples.reverse()
}

const isSimple = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false
  }
  return true
}
