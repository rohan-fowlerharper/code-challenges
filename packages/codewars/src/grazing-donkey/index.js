function getRopeLength(fieldDiameter, eatenRatio) {
  if (eatenRatio === 1) return fieldDiameter
  if (fieldDiameter === 0 || eatenRatio === 0) return 0

  let fieldRadius = fieldDiameter / 2
  let ropeLength = 1
  let area = 0
  let fieldArea = Math.PI * Math.pow(fieldRadius, 2)

  let minRopeLength = 0
  let maxRopeLength = fieldDiameter - 1

  while (true) {
    let ropeLengthMid = Math.floor((minRopeLength + maxRopeLength) / 2)

    if (maxRopeLength - minRopeLength === 1) return ropeLengthMid

    area = getAreaOfIntersection(fieldRadius, ropeLengthMid)

    if (area > fieldArea * eatenRatio) {
      maxRopeLength = ropeLengthMid
    } else {
      minRopeLength = ropeLengthMid
    }
  }
}

function getAreaOfIntersection(r1, r2) {
  let d = r1
  let r1sq = Math.pow(r1, 2)
  let r2sq = Math.pow(r2, 2)
  let dsq = Math.pow(d, 2)
  let d1 = (r1sq - r2sq + dsq) / (2 * d)
  let d2 = d - d1
  let d1sq = Math.pow(d1, 2)
  let d2sq = Math.pow(d2, 2)
  return (
    r1sq * Math.acos(d1 / r1) -
    d1 * Math.sqrt(r1sq - d1sq) +
    r2sq * Math.acos(d2 / r2) -
    d2 * Math.sqrt(r2sq - d2sq)
  )
}

// getRopeLength(200, 0.5)

module.exports = { getRopeLength }
