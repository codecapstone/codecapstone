import React from 'react'
import {connect} from 'react-redux'
import LineChart from './bigOChart'
import BigOTable from './BigOTable'

class Optimization extends React.Component {
  render() {
    return (
      <div className="bigOContent">
        <div className="bigOChartBorderCard">
          <div className="bigOChartCard">
            Big-O Ranges
            <LineChart />
            <BigOTable />
          </div>
        </div>
        <div className="bigOAboutBorderCard">
          <div className="bigOAboutCard">
            <h3>About Big-O Complexity</h3>
            <p>
              Big-O notation is used to classify algorithms according to their
              run time, in proportion to their input size.
            </p>
            <h4>Examples for Calculating Big O</h4>
            <ul>
              <li>For Loops -- O(n)</li>
              <li>Nested For Loops -- O(n^2)</li>
              <li>While Loops with Decreasing Input -- O(log n)</li>
              <li>Functions with no Loops -- O(1)</li>
              <li>Recursion with Input being Cut in Half -- O(n log n)</li>
            </ul>
            <h4>Tips for Calculating Big O with Loops</h4>
            <ul>
              <li>Drop All Constants -- ex. 3n === n</li>
              <li>Nested Loops - multiply Big O of each loop</li>
              <li>Sibling Loops -- add Big O of each loop</li>
            </ul>
            <h4>What was the Big-O notation for your solution?</h4>
            <h4>
              Could you optimize your solution to save time by solving the
              problem differently?
            </h4>
          </div>
          <div
            className="bigONextBtn"
            onClick={() => this.props.history.push('/solutions')}
          >
            Next Step - Check The Solution!
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  challenge: state.problems.selected
})

export default connect(mapState)(Optimization)
