export function between(str, left, rightRaw){
  // if(str === 2) return
  const right = rightRaw === undefined ? left : rightRaw

  const rightIndex = str.lastIndexOf(right)
  const leftIndex = str.indexOf(left)

  return rightIndex === -1 ?
    str :
    str.substring(leftIndex + left.length, rightIndex).trim()
}
