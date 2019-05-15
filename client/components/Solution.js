import React from 'react'

export const Solution = props => {
  return (
    <div className="solutionsBorderCard">
      <div className="solutionCard">
        Solution #{props.idx + 1}
        <pre>{props.solution}</pre>
      </div>
    </div>
  )
}
