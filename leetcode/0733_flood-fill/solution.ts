function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const currentColor = image[sr][sc]
  if (currentColor === color) return image

  const seen = new Set<[number, number]>()
  const vectors = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]
  function fill(sr: number, sc: number) {
    if (seen.has([sr, sc])) return

    if (
      sr < 0 ||
      sc < 0 ||
      sr > image.length - 1 ||
      sc > image[sr].length - 1 ||
      image[sr][sc] !== currentColor
    ) {
      return
    }

    seen.add([sr, sc])
    image[sr][sc] = color

    for (let [x, y] of vectors) {
      fill(sr + x, sc + y)
    }
  }

  fill(sr, sc)

  return image
}
