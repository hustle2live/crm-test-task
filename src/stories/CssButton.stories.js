/* eslint-disable indent */
import { CssButton } from './CssButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
// eslint-disable-next-line import/no-anonymous-default-export
export default {
   title: 'Example/CssButton',
   component: CssButton,
   tags: ['autodocs'],
   argTypes: {
      backgroundColor: { control: 'color' }
   }
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Active = {
   args: {
      active: true,
      label: 'CssButtonActive'
   }
};

export const Large = {
   args: {
      size: 'large',
      label: 'CssButton'
   }
};

export const Small = {
   args: {
      size: 'small',
      label: 'CssButton'
   }
};
