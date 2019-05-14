import React from 'react'

export const Instructions = () => {
  return (
    <div className="borderCard">
      <div className="userHomeCard" id="instructions">
        <h3>The Code Aloud Interview Process</h3>
        <div>
          <div>
            For each challenge, you will recieve a prompt. Practice repeating
            that prompt back to us in your own words.
          </div>
          <br />
          <div>
            {' '}
            Create an example input and output for the given prompt, and
            pseudo-code your approach, all before you are directed to our code
            editor where you will actually code an example out.{' '}
          </div>
          <br />
          <div>
            You can then check if your code passes the tests and/or run your
            example through the code editor. When you're finished, we will show
            you what you got correct and what you may have missed.{' '}
          </div>
          <br />
          <div>
            This approach is a sure way to prepare you for technical interviews
            and whiteboarding exercises. Good luck!
          </div>
        </div>
      </div>
    </div>
  )
}
