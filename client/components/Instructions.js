import React from 'react'
import {Link} from 'react-router-dom'
export const Instructions = () => {
  return (
    <div className="biggerBorderCard">
      <div id="instructions">
        <img
          src="https://power.pereless.com/wp-content/uploads/2016/12/photo_video-job-interview.jpg"
          className="image"
        />
        <h3>The Code Aloud Interview Process</h3>
        <div className="innerInstructions">
          <br />
          <div className="textBox">
            For each challenge, we'll guide you through steps to help you think
            about the problem and possible approaches *before* you start writing
            any code. Try to verbalize your thoughts as would be expected in a
            live interview situation.
          </div>
        </div>
        <div className="innerInstructions">
          <div>
            <h4>Prompt</h4> A statement of the problem. You'll read and repeat
            in your own words
          </div>
          <div>
            <h4>Examples: </h4>What the expected inputs and output might be.
            We'll provide at least one, and encourage you to create your own
            while thinking about edge cases.
          </div>
          <div>
            <h4>Approach: </h4>In human language, how would you would tackle
            this problem? Don't worry about code syntax here - we're just asking
            you to demonstrate your understandingof the challenge.
          </div>
          <div>
            <h4>Code: </h4>Yes, there will be code. Our editor will check your
            work automatically to see if yours passes the pre-loaded tests.
          </div>
          <div>
            <h4>Optimization: </h4>As a final step we ask you to think about the
            Big O of your solution and consider what time or space optimizations
            you could make.
          </div>
          <br />
          <br />
          <div>
            This approach is a sure way to prepare you for technical interviews
            and whiteboarding exercises. Good luck!
          </div>
        </div>
        <br />
        <br />
        <div id="goButton">
          <Link to="/prompt">
            <h3>Let's Go!</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}
