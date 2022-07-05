import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

// import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { Button } from '../components/Button';

// export default {
//   title: 'Example/Button',
//   component: Button,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as ComponentMeta<typeof Button>;

// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// export const Default = Template.bind({});
// export const Outlined = Template.bind({});
// export const Contained = Template.bind({});
// export const Disabled = Template.bind({});

// Default.args = {
//   children: 'default',
// };

// Outlined.args = {
//   variant: 'outlined',
//   children: 'outlined',
// };

// Contained.args = {
//   variant: 'contained',
//   children: 'contained',
// };

// Disabled.args = {
//   disabled: true,
//   children: 'disabled',
// };
