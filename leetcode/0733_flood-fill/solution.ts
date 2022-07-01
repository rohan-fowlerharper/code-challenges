function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const currentColor = image[sr][sc]
  if (currentColor === color) return image

  fill(image, sr, sc, color, currentColor)

  return image
}

function fill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
  currentColor: number
) {
  if (
    sr < 0 ||
    sc < 0 ||
    sr > image.length - 1 ||
    sc > image[sr].length - 1 ||
    image[sr][sc] !== currentColor
  ) {
    return
  }

  image[sr][sc] = color

  fill(image, sr + 1, sc, color, currentColor)
  fill(image, sr - 1, sc, color, currentColor)
  fill(image, sr, sc + 1, color, currentColor)
  fill(image, sr, sc - 1, color, currentColor)
}
