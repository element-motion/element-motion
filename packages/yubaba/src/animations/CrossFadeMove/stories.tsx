import styled from 'styled-components';
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Baba, { Move } from '../../../src';
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
import Toggler from '../../../examples/common/Toggler';
import StickyButton from '../../../examples/common/StickyButton';
import createScrollStore from '../../../examples/common/RestoreScrollOnMount';
import ScrollTopOnMount from '../../../examples/common/ScrollTopOnMount';
=======
import * as Common from 'yubaba-common';
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx

const RestoreScrollOnMount = Common.createRestoreScrollOnMount();

interface RootProps {
  margin?: boolean;
}

const Root = styled.img`
  position: relative;
  width: 105px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props: RootProps) => (props.margin ? 30 : 0)}px;
`;

const RightRoot = styled(Root)`
  float: right;
`;

const BigRightRoot = styled(RightRoot)`
  width: 315px;
  height: 480px;
`;

const MediumContainer = styled.div`
  height: 500px;
`;

const LongContainer = styled.div`
  height: 2000px;
`;

const Padding = styled.div`
  height: 90vh;
`;

const Circle = styled(RightRoot)`
  border-radius: 50%;
`;

const Rectangle = styled(RightRoot)`
  width: 200px;
`;

const SquareContainer = styled.div`
  width: 105px;
  height: 160px;
  position: relative;
`;

const FillSpace = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
`;

<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
storiesOf('CrossFadeMove', module)
  .add('Default', () => (
    <Toggler>
=======
const imageA = 'https://picsum.photos/200/300?a';
const imageB = 'https://picsum.photos/200/300?b';

storiesOf('yubaba/CrossFadeMove', module)
  .add('Default', () => (
    <Common.Toggler>
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
      {({ shown, toggle }) => (
        <div>
          <Common.StickyButton onClick={() => toggle()}>toggle</Common.StickyButton>
          {!shown ? (
            <Baba name="square-to-square" key="1">
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
              <Move>
                {({ ref, style }) => (
                  <Root
                    src={require('../../../examples/guessWho/images/guess-who.png')}
                    style={style}
                    innerRef={ref}
                  />
                )}
              </Move>
=======
              <Move>{({ ref, style }) => <Root src={imageA} style={style} innerRef={ref} />}</Move>
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
            </Baba>
          ) : (
            <Baba name="square-to-square" key="2">
              <Move>
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                {({ ref, style }) => (
                  <RightRoot
                    src={require('../../../examples/guessWho/images/female.png')}
                    style={style}
                    innerRef={ref}
                  />
                )}
=======
                {({ ref, style }) => <RightRoot src={imageB} style={style} innerRef={ref} />}
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
              </Move>
            </Baba>
          )}
        </div>
      )}
    </Common.Toggler>
  ))
  .add('WithMargin', () => (
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
    <Toggler>
=======
    <Common.Toggler>
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
      {({ shown, toggle }) => (
        <div>
          <Common.StickyButton onClick={() => toggle()}>toggle</Common.StickyButton>
          {!shown ? (
            <Baba name="square-to-square-margin" key="1">
              <Move>
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                {({ ref, style }) => (
                  <Root
                    src={require('../../../examples/guessWho/images/guess-who.png')}
                    margin
                    style={style}
                    innerRef={ref}
                  />
                )}
=======
                {({ ref, style }) => <Root src={imageA} margin style={style} innerRef={ref} />}
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
              </Move>
            </Baba>
          ) : (
            <Baba name="square-to-square-margin" key="2">
              <Move>
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                {({ ref, style }) => (
                  <RightRoot
                    src={require('../../../examples/guessWho/images/male.png')}
                    style={style}
                    innerRef={ref}
                  />
                )}
=======
                {({ ref, style }) => <RightRoot src={imageB} style={style} innerRef={ref} />}
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
              </Move>
            </Baba>
          )}
        </div>
      )}
    </Common.Toggler>
  ))
  .add('SmallToLarge', () => (
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
    <Toggler>
=======
    <Common.Toggler>
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
      {({ shown, toggle }) => (
        <div>
          <Common.StickyButton onClick={() => toggle()}>toggle</Common.StickyButton>
          {!shown ? (
            <Baba name="square-to-big-square" key="1">
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
              <Move>
                {({ ref, style }) => (
                  <Root
                    src={require('../../../examples/guessWho/images/guess-who.png')}
                    style={style}
                    innerRef={ref}
                  />
                )}
              </Move>
=======
              <Move>{({ ref, style }) => <Root src={imageA} style={style} innerRef={ref} />}</Move>
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
            </Baba>
          ) : (
            <Baba name="square-to-big-square" key="2">
              <Move>
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                {({ ref, style }) => (
                  <BigRightRoot
                    src={require('../../../examples/guessWho/images/female.png')}
                    style={style}
                    innerRef={ref}
                  />
                )}
=======
                {({ ref, style }) => <BigRightRoot src={imageB} style={style} innerRef={ref} />}
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
              </Move>
            </Baba>
          )}
        </div>
      )}
    </Common.Toggler>
  ))
  .add('SquareToRectangle', () => (
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
    <Toggler>
=======
    <Common.Toggler>
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
      {({ shown, toggle }) => (
        <div>
          <Common.StickyButton onClick={() => toggle()}>toggle</Common.StickyButton>
          {!shown ? (
            <Baba name="square-to-rectangle" key="1">
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
              <Move>
                {({ ref, style }) => (
                  <Root
                    src={require('../../../examples/guessWho/images/guess-who.png')}
                    style={style}
                    innerRef={ref}
                  />
                )}
              </Move>
=======
              <Move>{({ ref, style }) => <Root src={imageA} style={style} innerRef={ref} />}</Move>
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
            </Baba>
          ) : (
            <Baba name="square-to-rectangle" key="2">
              <Move>
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                {({ ref, style }) => (
                  <Rectangle
                    src={require('../../../examples/guessWho/images/male.png')}
                    margin
                    style={style}
                    innerRef={ref}
                  />
                )}
=======
                {({ ref, style }) => <Rectangle src={imageB} margin style={style} innerRef={ref} />}
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
              </Move>
            </Baba>
          )}
        </div>
      )}
    </Common.Toggler>
  ))
  .add('SquareToCircle', () => (
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
    <Toggler>
=======
    <Common.Toggler>
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
      {({ shown, toggle }) => (
        <div>
          <Common.StickyButton onClick={() => toggle()}>toggle</Common.StickyButton>
          {!shown ? (
            <Baba name="square-to-circle" key="1">
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
              <Move>
                {({ ref, style }) => (
                  <Root
                    src={require('../../../examples/guessWho/images/guess-who.png')}
                    style={style}
                    innerRef={ref}
                  />
                )}
              </Move>
=======
              <Move>{({ ref, style }) => <Root src={imageA} style={style} innerRef={ref} />}</Move>
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
            </Baba>
          ) : (
            <Baba name="square-to-circle" key="2">
              <Move>
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                {({ ref, style }) => (
                  <Circle
                    src={require('../../../examples/guessWho/images/female.png')}
                    style={style}
                    innerRef={ref}
                  />
                )}
=======
                {({ ref, style }) => <Circle src={imageB} style={style} innerRef={ref} />}
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
              </Move>
            </Baba>
          )}
        </div>
      )}
    </Common.Toggler>
  ))
  .add('OffscreenLargeToSmall', () => (
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
    <Toggler>
=======
    <Common.Toggler>
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
      {({ shown, toggle }) => (
        <LongContainer>
          <Common.StickyButton onClick={() => toggle()}>toggle</Common.StickyButton>
          {!shown ? (
            <div>
              <Padding data-big />
              <Baba name="offscreen-big-square-to-small-square" key="2">
                <Move>
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                  {({ ref, style }) => (
                    <BigRightRoot
                      src={require('../../../examples/guessWho/images/guess-who.png')}
                      style={style}
                      innerRef={ref}
                    />
                  )}
=======
                  {({ ref, style }) => <BigRightRoot src={imageA} style={style} innerRef={ref} />}
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                </Move>
              </Baba>
            </div>
          ) : (
            <Baba name="offscreen-big-square-to-small-square" key="1">
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
              <Move>
                {({ ref, style }) => (
                  <Root
                    src={require('../../../examples/guessWho/images/female2.png')}
                    style={style}
                    innerRef={ref}
                  />
                )}
              </Move>
=======
              <Move>{({ ref, style }) => <Root src={imageB} style={style} innerRef={ref} />}</Move>
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
            </Baba>
          )}
        </LongContainer>
      )}
    </Common.Toggler>
  ))
  .add('SmallWithMarginToOffscreenLargeWithMargin', () => (
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
    <Toggler>
=======
    <Common.Toggler>
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
      {({ shown, toggle }) => (
        <div>
          <Common.StickyButton onClick={() => toggle()}>toggle</Common.StickyButton>
          {!shown ? (
            <Baba name="square-to-offscreen-big-square-with-margin" key="1">
              <Move>
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                {({ ref, style }) => (
                  <Root
                    src={require('../../../examples/guessWho/images/guess-who.png')}
                    margin
                    style={style}
                    innerRef={ref}
                  />
                )}
=======
                {({ ref, style }) => <Root src={imageA} margin style={style} innerRef={ref} />}
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
              </Move>
            </Baba>
          ) : (
            <div>
              <Padding data-yolo />
              <Baba name="square-to-offscreen-big-square-with-margin" key="2">
                <Move>
                  {({ ref, style }) => (
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                    <BigRightRoot
                      src={require('../../../examples/guessWho/images/female.png')}
                      margin
                      style={style}
                      innerRef={ref}
                    />
=======
                    <BigRightRoot src={imageB} margin style={style} innerRef={ref} />
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                  )}
                </Move>
              </Baba>
            </div>
          )}
        </div>
      )}
    </Common.Toggler>
  ))
  .add('IndescriminateSizeToSmall', () => (
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
    <Toggler>
=======
    <Common.Toggler>
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
      {({ shown, toggle }) => (
        <div>
          <Common.StickyButton onClick={() => toggle()}>toggle</Common.StickyButton>
          {!shown ? (
            <SquareContainer>
              <Baba name="indescriminate-size-to-square" key="1">
                <Move>
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                  {({ ref, style }) => (
                    <FillSpace
                      src={require('../../../examples/guessWho/images/guess-who.png')}
                      style={style}
                      innerRef={ref}
                    />
                  )}
=======
                  {({ ref, style }) => <FillSpace src={imageA} style={style} innerRef={ref} />}
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                </Move>
              </Baba>
            </SquareContainer>
          ) : (
            <div>
              <Baba name="indescriminate-size-to-square" key="2">
                <Move>
                  {({ ref, style }) => (
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                    <BigRightRoot
                      src={require('../../../examples/guessWho/images/male.png')}
                      margin
                      style={style}
                      innerRef={ref}
                    />
=======
                    <BigRightRoot src={imageB} margin style={style} innerRef={ref} />
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                  )}
                </Move>
              </Baba>
            </div>
          )}
        </div>
      )}
    </Common.Toggler>
  ))
  .add('LongPageSmallToLarge', () => (
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
    <Toggler>
=======
    <Common.Toggler>
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
      {({ shown, toggle }) => (
        <div>
          <Common.StickyButton onClick={() => toggle()}>toggle</Common.StickyButton>
          {!shown ? (
            <LongContainer>
              <RestoreScrollOnMount />
              <MediumContainer />
              <Baba name="long-scroll-to-no-scroll" key="1">
                <Move>
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                  {({ ref, style }) => (
                    <Root
                      src={require('../../../examples/guessWho/images/guess-who.png')}
                      style={style}
                      innerRef={ref}
                    />
                  )}
=======
                  {({ ref, style }) => <Root src={imageA} style={style} innerRef={ref} />}
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                </Move>
              </Baba>
            </LongContainer>
          ) : (
            <div>
              <Common.ScrollTopOnMount />
              <Baba name="long-scroll-to-no-scroll" key="2">
                <Move>
                  {({ ref, style }) => (
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                    <BigRightRoot
                      src={require('../../../examples/guessWho/images/female2.png')}
                      margin
                      style={style}
                      innerRef={ref}
                    />
=======
                    <BigRightRoot src={imageB} margin style={style} innerRef={ref} />
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                  )}
                </Move>
              </Baba>
            </div>
          )}
        </div>
      )}
    </Common.Toggler>
  ))
  .add('SmallToElementThatNeverUnmounts', () => (
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
    <Toggler>
=======
    <Common.Toggler>
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
      {({ shown, toggle }) => (
        <div>
          <Common.StickyButton onClick={() => toggle()}>toggle</Common.StickyButton>
          {!shown && (
            <Baba name="one-already-mounted" key="1">
              <Move>
                {({ ref, style }) => (
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                  <Root
                    src={require('../../../examples/guessWho/images/guess-who.png')}
                    style={{ ...style, float: 'left' }}
                    innerRef={ref}
                  />
=======
                  <Root src={imageA} style={{ ...style, float: 'left' }} innerRef={ref} />
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                )}
              </Move>
            </Baba>
          )}

          <Baba name="one-already-mounted" key="2" in={!!shown}>
            <Move>
              {({ ref, style }) => (
                <RightRoot
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                  src={require('../../../examples/guessWho/images/female.png')}
=======
                  src={imageB}
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                  style={{
                    ...style,
                  }}
                  innerRef={ref}
                />
              )}
            </Move>
          </Baba>
        </div>
      )}
    </Common.Toggler>
  ))
  .add('SmallToElementThatNeverUnmountsReversed', () => (
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
    <Toggler>
=======
    <Common.Toggler>
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
      {({ shown, toggle }) => (
        <div>
          <Common.StickyButton onClick={() => toggle()}>toggle</Common.StickyButton>
          {shown && (
            <Baba name="one-already-mounted-reversed" key="1">
              <Move>
                {({ ref, style }) => (
                  <Root
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                    src={require('../../../examples/guessWho/images/guess-who.png')}
=======
                    src={imageA}
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                    style={{ ...style, position: 'fixed', top: 0, left: 0 }}
                    innerRef={ref}
                  />
                )}
              </Move>
            </Baba>
          )}

          <LongContainer>
            <br />
            <br />
            <br />
            <br />
            <Baba name="one-already-mounted-reversed" key="2" in={!shown}>
              <Move>
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                {({ ref, style }) => (
                  <RightRoot
                    src={require('../../../examples/guessWho/images/female.png')}
                    style={style}
                    innerRef={ref}
                  />
                )}
=======
                {({ ref, style }) => <RightRoot src={imageB} style={style} innerRef={ref} />}
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
              </Move>
            </Baba>
          </LongContainer>
        </div>
      )}
    </Common.Toggler>
  ))
  .add('BothNeverUnmounting', () => (
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
    <Toggler>
=======
    <Common.Toggler>
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
      {({ shown, toggle }) => (
        <div>
          <Common.StickyButton onClick={() => toggle()}>toggle</Common.StickyButton>
          <Baba name="both-already-mounted" key="1" in={!shown}>
            <Move>
              {({ ref, style }) => (
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                <Root
                  src={require('../../../examples/guessWho/images/guess-who.png')}
                  style={{ ...style, float: 'left' }}
                  innerRef={ref}
                />
=======
                <Root src={imageA} style={{ ...style, float: 'left' }} innerRef={ref} />
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
              )}
            </Move>
          </Baba>

          <Baba name="both-already-mounted" key="2" in={!!shown}>
            <Move>
              {({ ref, style }) => (
                <RightRoot
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                  src={require('../../../examples/guessWho/images/female.png')}
=======
                  src={imageB}
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                  style={{
                    ...style,
                  }}
                  innerRef={ref}
                />
              )}
            </Move>
          </Baba>
        </div>
      )}
    </Common.Toggler>
  ))
  .add('BothNeverUnmountingReversed', () => (
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
    <Toggler>
=======
    <Common.Toggler>
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
      {({ shown, toggle }) => (
        <div>
          <Common.StickyButton onClick={() => toggle()}>toggle</Common.StickyButton>
          <Baba name="both-already-mounted-reversed" key="1" in={!!shown}>
            <Move>
              {({ ref, style }) => (
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                <Root
                  src={require('../../../examples/guessWho/images/guess-who.png')}
                  style={{ ...style, float: 'left' }}
                  innerRef={ref}
                />
=======
                <Root src={imageA} style={{ ...style, float: 'left' }} innerRef={ref} />
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
              )}
            </Move>
          </Baba>

          <Baba name="both-already-mounted-reversed" key="2" in={!shown}>
            <Move>
              {({ ref, style }) => (
                <RightRoot
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                  src={require('../../../examples/guessWho/images/female.png')}
=======
                  src={imageB}
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                  style={{
                    ...style,
                  }}
                  innerRef={ref}
                />
              )}
            </Move>
          </Baba>
        </div>
      )}
    </Common.Toggler>
  ))
  .add('Aborting', () => (
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
    <Toggler>
=======
    <Common.Toggler>
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
      {({ shown, toggle }) => (
        <div>
          <Common.StickyButton onClick={() => toggle()}>
            {!shown ? 'toggle' : 'abort'}
          </Common.StickyButton>
          {!shown ? (
            <Baba name="aborting" key="1">
              <Move duration={5000}>
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
                {({ ref, style }) => (
                  <Root
                    src={require('../../../examples/guessWho/images/guess-who.png')}
                    style={style}
                    innerRef={ref}
                  />
                )}
=======
                {({ ref, style }) => <Root src={imageA} style={style} innerRef={ref} />}
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
              </Move>
            </Baba>
          ) : (
            <Baba name="aborting" key="2">
<<<<<<< HEAD:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
              {({ ref, style }) => (
                <RightRoot
                  src={require('../../../examples/guessWho/images/female.png')}
                  style={style}
                  innerRef={ref}
                />
              )}
=======
              {({ ref, style }) => <RightRoot src={imageB} style={style} innerRef={ref} />}
>>>>>>> chore: extract examples and common to their own packages:packages/yubaba/src/animations/CrossFadeMove/stories.tsx
            </Baba>
          )}
        </div>
      )}
    </Common.Toggler>
  ));
