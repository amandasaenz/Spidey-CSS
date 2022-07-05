import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/Button';

export default {
  title: 'Components/Button/Label',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Outlined = Template.bind({});
export const Contained = Template.bind({});

Default.args = {
  children: 'default',
};

Outlined.args = {
  variant: 'outlined',
  children: 'outlined',
};

Contained.args = {
  variant: 'contained',
  children: 'contained',
};
