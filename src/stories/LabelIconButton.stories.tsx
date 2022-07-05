import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/Button';

export default {
  title: 'Components/Button/Icon W Label',
  component: Button,
  argTypes: {
    icon: {
      options: [
        'heart',
        'email',
        'location',
        'phone',
        'burger',
        'account',
        'adduser',
        'back',
        'bookmark',
        'bubble',
        'charge',
        'charging',
        'edit',
        'error',
        'exit',
        'forward',
        'left',
        'message',
        'notification',
        'read',
        'refresh',
        'replay',
        'right',
        'search',
        'shuffle',
        'trash',
        'typing',
        'zoom',
        'up',
        'down',
      ],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Outlined = Template.bind({});
export const Contained = Template.bind({});

Default.args = {
  children: 'default',
  icon: 'edit',
};

Outlined.args = {
  variant: 'outlined',
  children: 'outlined',
  icon: 'edit',
};

Contained.args = {
  variant: 'contained',
  children: 'contained',
  icon: 'edit',
};
