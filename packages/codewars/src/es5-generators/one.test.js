import { describe, expect, it } from 'vitest'

import {
  generator,
  dummySeq,
  factorialSeq,
  fibonacciSeq,
  rangeSeq,
  primeSeq,
  partialSumSeq,
} from './one'

describe('ES5 Dummy generator', function () {
  it('Test dummy generator', function () {
    var seq = generator(dummySeq)
    expect(seq.next()).toEqual('dummy')
    expect(seq.next()).toEqual('dummy')
    expect(seq.next()).toEqual('dummy')
  })
})

describe('ES5 Simple Generators', function () {
  it('Test factorial generator', function () {
    var seq = generator(factorialSeq)
    expect(seq.next()).toEqual(1) // 0! = 1
    expect(seq.next()).toEqual(1) // 1! = 1
    expect(seq.next()).toEqual(2) // 2! = 2
    expect(seq.next()).toEqual(6) // 3! = 6
    expect(seq.next()).toEqual(24) // 4! = 6
  })

  it('Test Fibonacci generator', function () {
    var seq = generator(fibonacciSeq)
    expect(seq.next()).toEqual(1) // fib(0) = 1
    expect(seq.next()).toEqual(1) // fib(1) = 1
    expect(seq.next()).toEqual(2) // fib(2) = 2
    expect(seq.next()).toEqual(3) // fib(3) = 3
    expect(seq.next()).toEqual(5) // fib(4) = 5
    expect(seq.next()).toEqual(8) // fib(5) = 8
    expect(seq.next()).toEqual(13) // fib(6) = 13
  })

  it('Test Range generator', function () {
    var seq = generator(rangeSeq, 5, 3) // 5,8,11,14,17
    expect(seq.next()).toEqual(5)
    expect(seq.next()).toEqual(8)
    expect(seq.next()).toEqual(11)
    expect(seq.next()).toEqual(14)
    expect(seq.next()).toEqual(17)
  })

  it('Test Prime Numbers generator', function () {
    var seq = generator(primeSeq)
    expect(seq.next()).toEqual(2) // 2
    expect(seq.next()).toEqual(3) // 3
    expect(seq.next()).toEqual(5) // 5
    expect(seq.next()).toEqual(7) // 7
    expect(seq.next()).toEqual(11) // 11
    expect(seq.next()).toEqual(13) // 13
    expect(seq.next()).toEqual(17) // 17
    expect(seq.next()).toEqual(19) // 19
  })

  it('Test partial sum generator', function () {
    var seq = generator(partialSumSeq, -1, 4, 2, 5)
    expect(seq.next()).toEqual(-1) // -1
    expect(seq.next()).toEqual(3) // -1 + 4
    expect(seq.next()).toEqual(5) // -1 + 4 + 2
    expect(seq.next()).toEqual(10) // -1 + 4 + 2 + 5
    expect(seq.next().message).toEqual('Done') // Done
  })
})
