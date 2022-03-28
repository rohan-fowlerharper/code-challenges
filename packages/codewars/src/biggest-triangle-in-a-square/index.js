function biggestTriangInt(pointsList, center, radius) {
  let maxArea = 0
  let tempMaxTriangs = []
  let validPoints = []
  let validTriangs = []
  for (let i = 0; i < pointsList.length; i++) {
    if (isInsideCircle(pointsList[i], center, radius)) {
      validPoints.push(pointsList[i])
    }
  }

  for (let i = 0; i < validPoints.length; i++) {
    for (let j = i + 1; j < validPoints.length; j++) {
      for (let k = j + 1; k < validPoints.length; k++) {
        let triang = [validPoints[i], validPoints[j], validPoints[k]]
        validTriangs.push(triang)
        let area = getTriangArea(triang)
        if (area >= maxArea) {
          maxArea = area
          tempMaxTriangs.push(triang)
        }
      }
    }
  }

  let maxTriangs = []
  for (let i = 0; i < tempMaxTriangs.length; i++) {
    if (getTriangArea(tempMaxTriangs[i]).toFixed(10) === maxArea.toFixed(10)) {
      maxTriangs.push(tempMaxTriangs[i])
    }
  }

  return [
    validTriangs.length,
    maxArea,
    maxTriangs.length === 1 ? maxTriangs[0] : maxTriangs,
  ]
}

function getTriangArea(triang) {
  let a = getDistance(triang[0], triang[1])
  let b = getDistance(triang[1], triang[2])
  let c = getDistance(triang[0], triang[2])
  let p = (a + b + c) / 2
  return Math.sqrt(p * (p - a) * (p - b) * (p - c))
}

function getDistance(point1, point2) {
  return Math.sqrt(
    Math.pow(point2[0] - point1[0], 2) +
      Math.pow(point2[1] - point1[1], 2) +
      Math.pow(point2[2] - point1[2], 2)
  )
}

function isInsideCircle(point, center, radius) {
  return getDistance(point, center) <= radius
}

module.exports = { biggestTriangInt, isInsideCircle, getDistance }
