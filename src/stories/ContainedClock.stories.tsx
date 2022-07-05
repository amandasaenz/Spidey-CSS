import { ComponentStory, ComponentMeta } from '@storybook/react';
import Clock from '../components/Clock';

export default {
  title: 'Components/Clock/Contained',
  component: Clock,
} as ComponentMeta<typeof Clock>;

const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />;

export const Default = Template.bind({});
export const Circle = Template.bind({});

Default.args = {
  variant: 'contained',
};

Circle.args = {
  variant: 'contained',
  circle: true,
};
