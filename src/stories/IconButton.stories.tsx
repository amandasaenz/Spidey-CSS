import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/Button';

export default {
  title: 'Components/Button/Icon',
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
  icon: '',
};

Outlined.args = {
  variant: 'outlined',
  icon: '',
};

Contained.args = {
  variant: 'contained',
  icon: '',
};
