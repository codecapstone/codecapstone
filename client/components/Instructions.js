import React from 'react'

export const Instructions = () => {
  return (
    <div className="biggerBorderCard">
      <div id="instructions">
        <h3>The Code Aloud Interview Process</h3>
        <div>
          <div className="innerInstructions">
            <img
              src="https://power.pereless.com/wp-content/uploads/2016/12/photo_video-job-interview.jpg"
              className="image"
            />
            <br />
            <div className="textBox">
              For each challenge, you will be guided through several steps. The
              idea of these steps is to help you think about the problem and how
              you could solve it before you start writing any code. It also
              encourages you to communicate key parts of your thinking.
            </div>
          </div>

          <div>
            For each challenge, there are several steps. The steps should also
            deepen your understanding of the challenge. They also mirror key
            areas that you want to communicate to show your understanding.
          </div>
          <br />
          <div>
            First of all, you will recieve a prompt. We ask you to repeat that
            prompt and explain it in your own words to show that you have
            understood what we are asking.{' '}
          </div>
          <br />
          <div>
            Next, we ask you to create an example input and output for the given
            prompt. Again this shows you understand what we are asking and helps
            you think through any edge-cases, such as empty input.
          </div>
          <br />
          <div>
            Next we ask you to pseudo-code, or talk through what your approach
            to the problem would be. This lets you show your understanding
            without having to worry about smaller details like syntax. It also
            helps you to practice thinking through a whole problem without
            relying on test-specs or console-logs to check your work.
          </div>
          <br />
          <div>
            Eventually, you are directed to our code editor where you will
            actually code an example out. You can then check if your code passes
            the tests and/or run your example through the code editor.
          </div>
          <br />
          <div>
            As a final step we ask you to think about the Big O of your appraoch
            and to consider what time or space optimizations you could make.
          </div>
          <br />
          <div>
            When you're finished, we will show you what you got correct and what
            you may have missed. You also get the chance to decide if you are
            finished with a certain challange or if you want to be able to come
            back and try it again another time.
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
