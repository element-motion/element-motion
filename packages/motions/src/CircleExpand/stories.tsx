import styled from 'styled-components';
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Motion, { CircleExpand } from '../../../src';
import { Toggler } from '@element-motion/dev';

const Root = styled.div`
  width: 100px;
  height: 100px;
  background: #fea3aa;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
`;

const Padding = styled.div`
  height: 500px;
  width: 50px;
  flex-shrink: 0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`;

storiesOf('@element-motion/core/CircleExpand', module)
  .add('FromStaticPosition', () => (
    <Toggler>
      {({ shown, toggle }) => (
        <div>
          {!shown ? (
            <Container>
              <Motion name="circle-expand-square" key="1">
                <CircleExpand background="#fea3aa">
                  {({ ref, style }) => <Root onClick={() => toggle()} style={style} ref={ref} />}
                </CircleExpand>
              </Motion>
            </Container>
          ) : (
            <Container onClick={() => toggle()} style={{ cursor: 'pointer' }}>
              <Motion name="circle-expand-square" key="2">
                {({ ref, style }) => <div style={style} ref={ref} />}
              </Motion>
            </Container>
          )}
        </div>
      )}
    </Toggler>
  ))
  .add('ToLongPage', () => (
    <Toggler>
      {({ shown, toggle }) => (
        <div>
          {!shown ? (
            // Note the key. Without it things remove from DOM before we expect.
            <Container key="11">
              <Padding />

              <Motion name="page-with-different-scroll" key="1">
                <CircleExpand background="#fea3aa">
                  {({ ref, style }) => <Root onClick={() => toggle()} style={style} ref={ref} />}
                </CircleExpand>
              </Motion>

              <Padding />
            </Container>
          ) : (
            // Note the key. Without it things remove from DOM before we expect.
            <Container key="22" onClick={() => toggle()} style={{ cursor: 'pointer' }}>
              <Padding />
              <Padding />
              <Motion name="page-with-different-scroll" key="2">
                {({ ref, style }) => <div style={style} ref={ref} />}
              </Motion>
              <Padding />
              <Padding />
            </Container>
          )}
        </div>
      )}
    </Toggler>
  ));
