import { storiesOf } from '@storybook/react';
import { createMoveExamples } from '@element-motion/dev';
import Motion from '../../Motion';
import FadeMove from './index';

const Examples = createMoveExamples({ namePrefix: 'FadeMove', useDistinctEnd: true })(
  Motion,
  FadeMove
);

const stories = storiesOf('@element-motion/core/FadeMove', module);
Object.keys(Examples).forEach(key => stories.add(key, Examples[key]));
