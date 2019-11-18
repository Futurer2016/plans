import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
// 方言
import 'codemirror/mode/htmlmixed/htmlmixed';
// 自动补全工具
import 'codemirror/addon/hint/html-hint';
import 'codemirror/addon/hint/css-hint';
import 'codemirror/addon/hint/show-hint';

import Codemirror from 'codemirror';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const string = PropTypes.string.isRequired;

export default class CodeMock extends Component {
  editor = React.createRef()
  timer = null
  static propTypes = {
    mode: string,
    value: string,
    onChange: PropTypes.func
  }
  initEditor() {
    let box = this.editor.current;
    let coder = Codemirror.fromTextArea(box, {
      mode: this.props.mode,//编辑器语言
      theme:'material', //编辑器主题
      tabSize: 2,
      extraKeys: {"option": "autocomplete"},//ctrl可以弹出选择项 
      hint: Codemirror.hint[this.props.mode],
      lineNumbers: true//显示行号
    });

    coder.on('change', () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        let code = coder.getValue();
        this.props.onChange && this.props.onChange(code);
      }, 500);
    });
    coder.setValue(this.props.value);
  }
  componentDidMount() {
    this.initEditor();
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  render() {
    return (
      <div>
        <textarea ref={ this.editor } ></textarea>
      </div>
    )
  }
}
