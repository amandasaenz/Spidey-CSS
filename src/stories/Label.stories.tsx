import { ComponentStory, ComponentMeta } from '@storybook/react';
import Label from '../components/Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    icolor: {
      control: { type: 'color' },
    },
    tcolor: {
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
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;
export const Default = Template.bind({});
export const IconLabel = Template.bind({});

Default.args = {
  children: 'label',
};

IconLabel.args = {
  children: 'label',
  icon: 'edit',
};
