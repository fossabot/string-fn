export function splitEveryWhen(predicate, input){
  const answer = []
  let holder = []
  let carrier

  input.forEach((charOrAny, i) => {
    const maybeAnswer = predicate(
      charOrAny,
      [ ...holder, charOrAny ],
      answer,
      i,
      carrier
    )

    if (carrier) carrier = undefined

    if (maybeAnswer === true){

      answer.push(holder)
      holder = []
    } else if (maybeAnswer === false){

      holder.push(charOrAny)
    } else if (maybeAnswer){

      carrier = maybeAnswer[ 2 ]
      holder = [ ...maybeAnswer[ 1 ], charOrAny ]
      answer.push(maybeAnswer[ 0 ])
    } else if (input.length === i + 1){

      answer.push(holder)
    }

  })

  return answer
}
