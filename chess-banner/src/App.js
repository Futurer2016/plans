import React from 'react';
import Banner from './components/Banner';
import { randomColor } from './utils/math';
import RenderMock from './pages/RenderMock';

function App() {
  let len = 11;
  let c = [RenderMock].map((Item, index) => (
    <Item key={ 'done-' + index } />
  ));
  let children = c.concat(new Array(len).fill(1).map((val, index) => (
    <Banner.Block key={index} style={ { background: randomColor() } }>
      <h2>标题{index}</h2>
    </Banner.Block>
  )));
  return (
    <Banner className={"banner--fullscreen"} col={4} row={3}>
      <>
        { children }
      </>
    </Banner>
  );
}

export default App;
