import { describe, it, expect } from 'vitest'

import { biggestTriangInt, isInsideCircle, getDistance } from './index'

describe('isInsideCircle', () => {
  it('should return true', () => {
    expect(isInsideCircle([0, 0, 0], [0, 0, 0], 1)).toBe(true)
  })
  it('should return false', () => {
    expect(isInsideCircle([1, 1, 1], [0, 0, 0], 1)).toBe(false)
  })
})

describe('getDistance', () => {
  it('should return 1.73205', () => {
    expect(getDistance([0, 0, 0], [1, 1, 1])).toBeCloseTo(1.73205)
  })
})

describe('Static Cases', function () {
  it('Simple Ones', function () {
    var points_list1 = [
      [1, 2, -4],
      [-3, 2, 4],
      [7, 8, -4],
      [2, 3, 5],
      [-2, -1, 1],
    ]
    var sphere_center1 = [1, 2, -2]
    var radius1 = 8
    var res = biggestTriangInt(points_list1, sphere_center1, radius1)
    var result = [
      4,
      22.627416997969508,
      [
        [1, 2, -4],
        [2, 3, 5],
        [-2, -1, 1],
      ],
    ]
    expect(res[0]).toEqual(result[0])

    expect(res[2]).toEqual(result[2])
    expect(res[1] - result[1]).toBeLessThan(1e-10)

    var points_list2 = [
      [1, 2, -4],
      [-3, 2, 4],
      [7, 8, -4],
      [2, 3, 5],
      [-2, -1, 1],
      [3, 2, 6],
      [1, 4, 0],
      [-4, -5, -6],
      [4, 5, 6],
      [-2, -3, -5],
      [-1, -2, 4],
      [-3, -2, -6],
      [-1, -4, 0],
      [2, 1, -1],
    ]
    var sphere_center2 = [0, 0, 0]
    var radius2 = 8
    res = biggestTriangInt(points_list2, sphere_center2, radius2)
    result = [
      165,
      33.645207682521445,
      [
        [
          [1, 2, -4],
          [3, 2, 6],
          [-1, -4, 0],
        ],
        [
          [1, 4, 0],
          [-1, -2, 4],
          [-3, -2, -6],
        ],
      ],
    ]
    res = biggestTriangInt(points_list2, sphere_center2, radius2)
    result = [
      165,
      33.645207682521445,
      [
        [
          [1, 2, -4],
          [3, 2, 6],
          [-1, -4, 0],
        ],
        [
          [1, 4, 0],
          [-1, -2, 4],
          [-3, -2, -6],
        ],
      ],
    ]
    expect(res[0]).toEqual(result[0])
    expect(res[2]).toEqual(result[2])
    expect(res[1] - result[1]).toBeLessThan(1e-10)
  })
})
