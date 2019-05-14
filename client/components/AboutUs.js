import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export const AboutUs = props => {
  return (
    // <div className="borderCard">
    <div className="userHomeCard">
      <h1>About Us</h1>
      <h3>
        We know there are many places where you can work on algorithms. What
        makes Code Aloud different is our focus on what happens before the
        coding: <br />
        <ul>
          <li>Taking time to consider the question</li>
          <br />
          <li>Formulating examples and edge cases</li>
          <br />
          <li>Verbalizing an approach</li>
        </ul>
        These are skills that will help you nail your technical interviews and
        achieve your dream job. Best of luck!
      </h3>
      <img id="signature" src="https://i.imgur.com/CN19B7W.png?1" />
    </div>
    // </div>
  )
}
