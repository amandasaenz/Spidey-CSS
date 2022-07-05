import { ComponentStory, ComponentMeta } from '@storybook/react';
import Clock from '../components/Clock';

export default {
  title: 'Components/Clock/Default',
  component: Clock,
} as ComponentMeta<typeof Clock>;

const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />;

export const Default = Template.bind({});
export const Circle = Template.bind({});

Default.args = {};

Circle.args = {
  circle: true,
};
