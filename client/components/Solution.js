import React from 'react'

export const Solution = props => {
  return (
    <div id="individualSolution">
      Solution #{props.idx + 1}
      <pre>{props.solution}</pre>
    </div>
  )
}
