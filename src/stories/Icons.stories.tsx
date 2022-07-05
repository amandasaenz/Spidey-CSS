import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from '../components/Icons';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    color: {
      control: { type: 'color' },
    },
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
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;
export const Default = Template.bind({});

Default.args = {};
