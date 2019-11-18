import React, { Component } from 'react';
import { context } from '../context';
import PropTypes from 'prop-types';

export default class Banner extends Component {
  static defaultProps = {
    className: ''
  }
  static propTypes = {
    className: PropTypes.string,
    col: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired
  }
  state = {
    index: [0, 0],
    dx: '0',
    dy: '0'
  }
  handleClick  = (e, arrow) => {
    if('up' === arrow) {
      this.moveUp();
    }
    // 向右
    if('right' === arrow) {
      this.moveRight();
    }
    else if('down' === arrow) {
      this.moveDown();
    }
    else if('left' === arrow) {
      this.moveLeft();
    }
  }
  moveTo(ix, iy) {
    let dx = -100 / this.props.col * ix + '%';
    let dy = -100 / this.props.row * iy + '%';
    this.setState({index: [ix, iy], dx,  dy});
  }
  moveUp() {
    let ix = this.state.index[0];
    let iy = this.state.index[1];
    // let row = this.props.row;
    if(iy > 0) {
      this.moveTo(ix, iy - 1);
    }
    // else if(ix > 0) {
    //   this.moveTo(ix - 1, row - 1);
    // }
  }
  moveRight() {
    let ix = this.state.index[0];
    let iy = this.state.index[1];
    let col = this.props.col;
    let row = this.props.row;
    if(ix < col - 1) {
      this.moveTo(++ix, iy);
    }
    else if(iy < row  - 1) {
      this.moveTo(0, ++iy);
    }
  }
  moveDown() {
    let ix = this.state.index[0];
    let iy = this.state.index[1];
    // let col = this.props.col;
    let row = this.props.row;
    if(iy < row - 1) {
      this.moveTo(ix, iy + 1);
    }
    // else if(ix < col - 1) {
    //   this.moveTo(ix + 1, 0);
    // }
  }
  moveLeft() {
    let ix = this.state.index[0];
    let iy = this.state.index[1];
    let col = this.props.col;
    if(ix > 0) {
      this.moveTo(--ix, iy);
    }
    else if(iy > 0) {
      this.moveTo(col - 1, --iy);
    }
  }
  render() {
    return (
      // 外容器
      <div className={"clearfix banner " + this.props.className}>
        {/* 内容器 */}
        <div className="clearfix banner__content" style={ { width: this.props.col + '00%', height: this.props.row + '00%', transform: `translate(${this.state.dx}, ${this.state.dy})` } }>
          <context.Provider value={ {col: this.props.col, row: this.props.row, onClick: (...arg) => this.handleClick(...arg)} }>
            { this.props.children }
          </context.Provider>
        </div>
      </div>
    )
  }
}