import React from 'react'

export const Solution = props => {
  return (
    <div className="largeViewCard">
      Solution #{props.idx + 1}
      <pre style={{fontSize: '120%'}}>{props.solution}</pre>
    </div>
  )
}
