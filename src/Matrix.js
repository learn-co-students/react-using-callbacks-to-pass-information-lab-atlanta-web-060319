import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: ''
    }
  }

  handleColorSelect = (str) => {
    this.setState({
      selectedColor: str
    })
  }

  handleCellColor = () => this.state.selectedColor
    
  

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} handleCellColor={this.handleCellColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector handleColorSelect={this.handleColorSelect} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
