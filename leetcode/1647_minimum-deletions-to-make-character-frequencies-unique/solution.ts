// feels kinda brute forcey
export function minDeletions(s: string): number {
  let frequencies = new Map<string, number>()
  let priorityQueue: Array<number> = []

  let count = 0

  for (let i = 0; i < s.length; i++) {
    frequencies.set(s[i], (frequencies.get(s[i]) || 0) + 1)
  }

  for (let [_, frequency] of frequencies) {
    priorityQueue.push(frequency)
  }

  priorityQueue.sort((a, b) => b - a)

  while (priorityQueue.length != 0) {
    let mostFrequent = priorityQueue.shift()

    if (priorityQueue.length == 0) {
      return count
    }

    if (mostFrequent == priorityQueue[0]) {
      if (mostFrequent > 1) {
        priorityQueue.push(mostFrequent - 1)
        priorityQueue.sort((a, b) => b - a)
      }

      count++
    }
  }

  return count
}
