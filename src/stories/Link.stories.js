/* eslint-disable indent */
import { Link } from './Link';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: 'Example/Link',
   component: Link,
   tags: ['autodocs'],
   argTypes: {
      backgroundColor: { control: 'color' }
   }
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Active = {
   args: {
      active: true,
      label: 'Link'
   }
};
