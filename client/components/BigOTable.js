import React from 'react'

export default class BigOTable extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Data Structure</th>
            <th>Insert</th>
            <th>Delete</th>
            <th>Search</th>
          </tr>
          <tr>
            <td>Array/Stack/Queue</td>
            <td>O(1)</td>
            <td>O(1)</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td>Linked List</td>
            <td>O(1)</td>
            <td>O(1)</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td>Doubly Linked List</td>
            <td>O(1)</td>
            <td>O(1)</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td>Hash Table</td>
            <td>O(1) - O(n)</td>
            <td>O(1) - O(n)</td>
            <td>O(1) - O(n)</td>
          </tr>
          <tr>
            <td>Binary Search Tree</td>
            <td>O(log n) - O(n)</td>
            <td>O(log n) - O(n)</td>
            <td>O(log n) - O(n)</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
