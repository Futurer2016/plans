import React from 'react';
const htmlparser2 = require('htmlparser2');
export const htmlToReactDom = html => {
  let parser = new htmlparser2.Parser(
    {
      onopentag(name, attribs) {
        attribs = Object.keys(attribs).reduce((prev, next) => {
          if('class' === next) {
            prev['className'] = attribs[next];
          }
          return prev;
        }, {});
        let reactDOM = React.createElement(name, attribs);
        console.log(reactDOM);
      },
      ontext(text) {
        console.log("-->", text);
      },
      onclosetag(tagname) {
        console.log(tagname);
      }
    },
    { decodeEntities: true }
  );
  parser.write(html);
  parser.end();
}