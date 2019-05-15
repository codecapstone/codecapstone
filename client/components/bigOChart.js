import React, {PureComponent} from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer
} from 'recharts'

const data = [
  {
    'O(1)': 1,
    'O(n)': 0,
    'O(log n)': undefined,
    'O(n^2)': 0,
    'O(n log n)': undefined
  },
  {
    'O(1)': 1,
    'O(n)': 1,
    'O(log n)': 0,
    'O(n^2)': 1,
    'O(n log n)': 0
  },
  {
    'O(1)': 1,
    'O(n)': 2,
    'O(log n)': 0.30103,
    'O(n^2)': 4,
    'O(n log n)': 0.60205999
  },
  {
    'O(1)': 1,
    'O(n)': 3,
    'O(log n)': 0.47712125,
    'O(n^2)': 9,
    'O(n log n)': 1.4313638
  },
  {
    'O(1)': 1,
    'O(n)': 4,
    'O(log n)': 0.60205999,
    'O(n^2)': 16,
    'O(n log n)': 2.40824
  },
  {
    'O(1)': 1,
    'O(n)': 5,
    'O(log n)': 0.69897,
    'O(n^2)': 25,
    'O(n log n)': 3.49485
  },
  {
    'O(1)': 1,
    'O(n)': 6,
    'O(log n)': 0.77815125,
    'O(n^2)': 36,
    'O(n log n)': 4.6689075
  },
  {
    'O(1)': 1,
    'O(n)': 7,
    'O(log n)': 0.84509804,
    'O(n log n)': 5.9156863
  },
  {
    'O(1)': 1,
    'O(n)': 8,
    'O(log n)': 0.90308999,
    'O(n log n)': 7.2247199
  },
  {
    'O(1)': 1,
    'O(n)': 9,
    'O(log n)': 0.9542451,
    'O(n log n)': 8.5881826
  },
  {
    'O(1)': 1,
    'O(n)': 10,
    'O(log n)': 1,
    'O(n log n)': 10
  },
  {
    'O(1)': 1,
    'O(n)': 11,
    'O(log n)': 1.0413927,
    'O(n log n)': 11.45532
  },
  {
    'O(1)': 1,
    'O(n)': 12,
    'O(log n)': 1.0791812,
    'O(n log n)': 12.950175
  },
  {
    'O(1)': 1,
    'O(n)': 13,
    'O(log n)': 1.1139434,
    'O(n log n)': 14.481264
  },
  {
    'O(1)': 1,
    'O(n)': 14,
    'O(log n)': 1.146128,
    'O(n log n)': 16.045792
  },
  {
    'O(1)': 1,
    'O(n)': 15,
    'O(log n)': 1.1760913,
    'O(n log n)': 17.641369
  },
  {
    'O(1)': 1,
    'O(n)': 16,
    'O(log n)': 1.20412,
    'O(n log n)': 19.26592
  },
  {
    'O(1)': 1,
    'O(n)': 17,
    'O(log n)': 1.2304489,
    'O(n log n)': 20.917632
  },
  {
    'O(1)': 1,
    'O(n)': 18,
    'O(log n)': 1.2552725,
    'O(n log n)': 22.594905
  },
  {
    'O(1)': 1,
    'O(n)': 19,
    'O(log n)': 1.2787536,
    'O(n log n)': 24.296318
  },
  {
    'O(1)': 1,
    'O(n)': 20,
    'O(log n)': 1.301103,
    'O(n log n)': 26.0206
  }
]

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/'

  render() {
    return (
      <ResponsiveContainer height="100%" width="100%">
        <LineChart
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 10
          }}
        >
          <XAxis>
            <Label angle={0} position="bottom" style={{textAnchor: 'middle'}}>
              Input Size
            </Label>
          </XAxis>
          <YAxis>
            <Label angle={270} position="left" style={{textAnchor: 'middle'}}>
              Time
            </Label>
          </YAxis>
          <Tooltip />
          <Line
            type="monotone"
            dataKey="O(1)"
            stroke="#3FBF00"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="O(log n)"
            stroke="#93FF96"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="O(n)"
            stroke="#F2D398"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="O(n log n)"
            stroke="#D78521"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="O(n^2)"
            stroke="#DE1A1A"
            strokeWidth={3}
            dot={false}
          />
          <Legend layout="vertical" verticalAlign="bottom" align="bottom" />
        </LineChart>
      </ResponsiveContainer>
    )
  }
}
