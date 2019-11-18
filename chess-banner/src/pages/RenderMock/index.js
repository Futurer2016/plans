import React, { Component } from 'react';
import Banner from '../../components/Banner';
import CodeMock from './CodeMock';
import RenderArea from './RenderArea';

import './RenderMock.css';

import htmlMaker from './data/htmlMaker';
import cssMaker from './data/cssMaker';

const htmlCode = htmlMaker();
const cssCode = cssMaker();

export default class RenderMock extends Component {
  
  state = {
    html: htmlCode,
    css: cssCode
  }
  handleChange = (type, code) => {
    this.setState({
      [type]: code
    });
  }
  render() {
    return (
      <Banner.Block { ...this.props }>
        <div className="mock-container">
          <div className="clearfix code-area">
            <div className="code__box code__box--html">
              <CodeMock mode="htmlmixed" value={ htmlCode } onChange={code => this.handleChange('html', code)} />
            </div>
            <div className="code__box code__box--css">
              <CodeMock mode="css" value={ cssCode } onChange={code => this.handleChange('css', code)} />
            </div>
          </div>
          <RenderArea html={this.state.html} css={this.state.css}/>
        </div>
      </Banner.Block>
    )
  }
}
