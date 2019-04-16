export function splitEveryWhen(predicate, input){
  const answer = []
  let holder = []

  input.forEach((charOrAny, i) => {
    const maybeAnswer = predicate(
      charOrAny,
      [ ...holder, charOrAny ],
      answer,
      i
    )
    if (maybeAnswer === true){
      answer.push(holder)
      holder = []
    } else if (input.length === i + 1){
      holder.push(charOrAny)
      answer.push(holder)
    } else if (maybeAnswer === false){
      holder.push(charOrAny)
    } else {
      holder = [...maybeAnswer[ 1 ], charOrAny]
      answer.push(maybeAnswer[ 0 ])
    }
  })

  return answer
}
