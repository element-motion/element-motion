import styled from 'styled-components';
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Baba, { CircleExpand } from '../../../src';
<<<<<<< HEAD:packages/yubaba/src/animations/CircleExpand/stories.tsx
import Toggler from '../../../examples/common/Toggler';
import StickyButton from '../../../examples/common/StickyButton';
=======
import { Toggler } from 'yubaba-common';
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CircleExpand/stories.tsx

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

<<<<<<< HEAD:packages/yubaba/src/animations/CircleExpand/stories.tsx
storiesOf('CircleExpand', module)
=======
storiesOf('yubaba/CircleExpand', module)
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CircleExpand/stories.tsx
  .add('FromStaticPosition', () => (
    <Toggler>
      {({ shown, toggle }) => (
        <div>
          {!shown ? (
            <Container>
              <Baba name="circle-expand-square" key="1">
                <CircleExpand background="#fea3aa">
                  {({ ref, style }) => (
                    <Root onClick={() => toggle()} style={style} innerRef={ref} />
                  )}
                </CircleExpand>
              </Baba>
            </Container>
          ) : (
            <Container onClick={() => toggle()} style={{ cursor: 'pointer' }}>
              <Baba name="circle-expand-square" key="2">
                {({ ref, style }) => <div style={style} ref={ref} />}
              </Baba>
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

              <Baba name="page-with-different-scroll" key="1">
                <CircleExpand background="#fea3aa">
                  {({ ref, style }) => (
                    <Root onClick={() => toggle()} style={style} innerRef={ref} />
                  )}
                </CircleExpand>
              </Baba>

              <Padding />
            </Container>
          ) : (
            // Note the key. Without it things remove from DOM before we expect.
<<<<<<< HEAD:packages/yubaba/src/animations/CircleExpand/stories.tsx
            <Container key="22">
=======
            <Container key="22" onClick={() => toggle()} style={{ cursor: 'pointer' }}>
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CircleExpand/stories.tsx
              <Padding />
              <Padding />
              <Baba name="page-with-different-scroll" key="2">
                {({ ref, style }) => <div style={style} ref={ref} />}
              </Baba>
              <Padding />
              <Padding />
            </Container>
          )}
        </div>
      )}
    </Toggler>
  ));
