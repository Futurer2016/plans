import React, { Component } from 'react';
import { context } from '../context';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
export default class Block extends Component {
  static contextType = context;
  static defaultProps = {
    className: '',
    style: {}
  }
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
  }
  state = {
    up: '',
    right: '',
    down: '',
    left: ''
  }
  resize = (...args) => {
    this.props.onresize && this.props.onresize.apply(null, args);
  }
  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }
  handleMouseEnter = (arrow) => {
    this.setState({
      [arrow]: 'block'
    });
  }
  handleMouseLeave = (arrow) => {
    this.setState({
      [arrow]: 'none'
    });
  }
  handleClick = (...arg) => {
    this.context.onClick && this.context.onClick(...arg);
  }
  render() {
    return (
      <context.Consumer>
        {
          (value) => (
            <div className="banner__content__block" style={ { ...this.props.style, width: 100/value.col + '%', height: 100/ value.row  + '%' } }>
              { this.props.children }
              <div className="banner__content__block__slider banner__content__block__slider--up"
                onMouseEnter={() => this.handleMouseEnter('up')}
                onMouseLeave={() => this.handleMouseLeave('up')}
                onClick={(e) => this.handleClick(e, 'up')}>
                <Icon type="up" className="block__slider block__slider--up" style={ { display: this.state.up } } />
              </div>
              <div className="banner__content__block__slider banner__content__block__slider--right"
                onMouseEnter={() => this.handleMouseEnter('right')}
                onMouseLeave={() => this.handleMouseLeave('right')}
                onClick={(e) => this.handleClick(e, 'right')}>
                <Icon type="right" className="block__slider block__slider--right"  style={ { display: this.state.right } }/>
              </div>
              <div className="banner__content__block__slider banner__content__block__slider--down"
                onMouseEnter={() => this.handleMouseEnter('down')}
                onMouseLeave={() => this.handleMouseLeave('down')}
                onClick={(e) => this.handleClick(e, 'down')}>
                <Icon type="down" className="block__slider block__slider--down" style={ { display: this.state.down } } />
              </div>
              <div className="banner__content__block__slider banner__content__block__slider--left"
                onMouseEnter={() => this.handleMouseEnter('left')}
                onMouseLeave={() => this.handleMouseLeave('left')}
                onClick={(e) => this.handleClick(e, 'left')}>
                <Icon type="left" className="block__slider block__slider--left" style={ { display: this.state.left } } />
              </div>
            </div>
          )
        }
      </context.Consumer>
      
    )
  }
}