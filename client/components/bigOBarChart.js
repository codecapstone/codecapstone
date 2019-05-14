import React, {PureComponent} from 'react'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const data = [
  {
    name: 'Arrays',
    insert: 'O(1)',
    delete: 'O(1)',
    search: 'O(n)'
  }
]

export default class BigOBarChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/'

  render() {
    return (
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="insert" fill="#8884d8" />
          <Bar dataKey="delete" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}
