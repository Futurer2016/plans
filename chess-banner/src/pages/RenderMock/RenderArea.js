import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import { htmlToReactDom } from './../../utils/htmlAnalyse';
const Base64 = require('js-base64').Base64;

const string = PropTypes.string.isRequired;

const link = document.createElement('link');
link.rel = "stylesheet";
link.type = "text/css";
document.head.appendChild(link);

export default class RenderArea extends Component {
  static propTypes = {
    html: string,
    css: string
  }
  componentDidMount() {
    let css = this.props.css.replace(/\n/g, '');
    link.href = 'data:text/css;base64, ' + Base64.encode(css);
  }
  componentDidUpdate() {
    let css = this.props.css.replace(/\n/g, '');
    link.href = 'data:text/css;base64, ' + Base64.encode(css);
  }
  componentWillUnmount() {
    // style.innerHTML = '';
  }
  beginRender = () => {
    htmlToReactDom(this.props.html);
  }
  render() {
    return (
      <div className="render-box">
        <div className="render-btn-list">
          <Button type="primary" onClick={this.beginRender}>开始渲染</Button>
        </div>
        <div className="render-area">
          <div className="render-container" dangerouslySetInnerHTML={ { __html: this.props.html } }></div>
        </div>
      </div>
    )
  }
}
