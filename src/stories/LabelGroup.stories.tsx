import { ComponentStory, ComponentMeta } from '@storybook/react';
import Label from '../components/Label';
import Labels from '../components/Labels';

export default {
  title: 'Components/Label Group',
  component: Labels,
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
} as ComponentMeta<typeof Labels>;

const Template: ComponentStory<typeof Labels> = (args) => {
  return (
    <Labels {...args}>
      <Label>label</Label>
      <Label>label</Label>
      <Label>label</Label>
      <Label>label</Label>
      <Label>label</Label>
    </Labels>
  );
};

export const Default = Template.bind({});
export const Vertical = Template.bind({});

Default.args = {
  //   horizontal: true,
};

Vertical.args = {
  vertical: true,
};
