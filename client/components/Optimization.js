import React from 'react'
import {connect} from 'react-redux'
import LineChart from './bigOChart'
import BigOTable from './BigOTable'

class Optimization extends React.Component {
  render() {
    return (
      <div className="bigOContent">
        <div className="bigOBorderCard">
          <div className="bigOTableCard">
            Big-O Ranges
            <BigOTable />
          </div>
        </div>
        <div className="bigOBorderCard">
          <div className="bigOChartCard">
            Big-O Complexity
            <LineChart />
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
            <h4>Tips for Loops</h4>
            <ul>
              <li>Stuff inside loop -- multiply</li>
              <li>Nested Loops -- multiply</li>
              <li>Sibling Loops -- add</li>
            </ul>
            <h4>What was the Big-O notation for your solution?</h4>
            <h4>
              Could you optimize your solution to save time by solving the
              problem differently?
            </h4>
          </div>
          <div
            className="bigONextBtn"
            onClick={() => this.props.history.push('/stats')}
          >
            Next Step - Check Your Stats!
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
