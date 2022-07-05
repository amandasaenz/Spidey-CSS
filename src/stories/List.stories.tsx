import { ComponentStory, ComponentMeta } from '@storybook/react';
import List from '../components/List';

export default {
  title: 'Components/List',
  component: List,
  argTypes: {
    // variant: {
    //   options: [
    //     'h1',
    //     'h2',
    //     'h3',
    //     'h4',
    //     'h5',
    //     'h6',
    //     'body',
    //     'link',
    //     'navlink',
    //     'caption',
    //     'overline',
    //     'button',
    //   ],
    //   control: { type: 'select' },
    // },
    // lowercase: {
    //   control: { type: 'boolean' },
    // },
    // color: {
    //   control: { type: 'color' },
    // },
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;
export const Default = Template.bind({});
export const Circle = Template.bind({});

Default.args = {
  //   children:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio metus, dignissim eu ultricies at, laoreet ac mauris. Praesent vel sem eget metus consectetur ornare non at dui. Mauris at ultrices augue. Vivamus pulvinar lectus dolor, sed semper nunc viverra non. Aliquam consectetur dolor non lacus convallis convallis eget id tellus. Morbi facilisis vel nisi rhoncus iaculis. Vestibulum ac lacinia neque, eu vehicula enim. In nec interdum leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
  children: 'list',
};

Circle.args = {
  children: 'list',
  //   children:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio metus, dignissim eu ultricies at, laoreet ac mauris. Praesent vel sem eget metus consectetur ornare non at dui. Mauris at ultrices augue. Vivamus pulvinar lectus dolor, sed semper nunc viverra non. Aliquam consectetur dolor non lacus convallis convallis eget id tellus. Morbi facilisis vel nisi rhoncus iaculis. Vestibulum ac lacinia neque, eu vehicula enim. In nec interdum leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
  circle: true,
};
