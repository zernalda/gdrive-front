import React, { Component } from 'react'

export class Table extends Component {
    render() {
        return (
            <table id="simple-board">
                <thead>
                    <tr>
                        <td>head1</td>
                        <td>head2</td>
                        <td>head3</td>
                    </tr>
                </thead>
                <tbody>
                    <tr id="row0">
                        <td id="cell0-0">1</td>
                        <td id="cell0-1">2</td>
                        <td id="cell0-2">3</td>
                    </tr>
                    <tr id="row1">
                        <td id="cell1-0">4</td>
                        <td id="cell1-1">5</td>
                        <td id="cell1-2">6</td>
                    </tr>
                    <tr id="row2">
                        <td id="cell2-0">7</td>
                        <td id="cell2-1">8</td>
                        <td id="cell2-2">9</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table
