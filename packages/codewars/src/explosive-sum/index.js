function sum(num) {
  if (num < 0) {
    return 0
  }
  let tmp = Array.from({ length: num + 1 }).fill(0)
  tmp[0] = 1
  for (let i = 1; i < num + 1; i++) {
    for (let j = i; j < num + 1; j++) {
      tmp[j] += tmp[j - i]
    }
  }
  return tmp[tmp.length - 1]
}

// best practice would be to memoize the results of this function for future computations
