const whoEatsWho = (zoo) => {
  const animals = zoo.split(',')
  const result = [zoo]
  const canEat = {
    antelope: 'grass',
    'big-fish': 'little-fish',
    bug: 'leaves',
    bear: 'big-fish,bug,chicken,cow,leaves,sheep',
    chicken: 'bug',
    cow: 'grass',
    fox: 'chicken,sheep',
    giraffe: 'leaves',
    lion: 'antelope,cow',
    panda: 'leaves',
    sheep: 'grass',
  }
  for (let i = 0; i < animals.length; i++) {
    const animal = animals[i]
    const foodLeft = animals[i - 1]
    const foodRight = animals[i + 1]
    const food = canEat[animal] || ''
    if (food.includes(foodLeft)) {
      result.push(`${animal} eats ${foodLeft}`)
      animals.splice(i - 1, 1)
      i = -1
    } else if (food.includes(foodRight)) {
      result.push(`${animal} eats ${foodRight}`)
      animals.splice(i + 1, 1)
      i = -1
    }
  }
  return [...result, animals.join(',')]
}

module.exports = { whoEatsWho }
