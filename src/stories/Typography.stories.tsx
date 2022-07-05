import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from '../components/Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: {
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'body',
        'link',
        'navlink',
        'caption',
        'overline',
        'button',
      ],
      control: { type: 'select' },
    },
    lowercase: {
      control: { type: 'boolean' },
    },
    color: {
      control: { type: 'color' },
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);
export const Default = Template.bind({});
export const Heading = Template.bind({});
export const Subheading = Template.bind({});
export const Caption = Template.bind({});
export const Button = Template.bind({});
export const Navlink = Template.bind({});
export const Link = Template.bind({});
export const Overline = Template.bind({});

Default.args = {
  children: 'The quick brown fox jumps over the lazy dog',
};

Heading.args = {
  children: 'The quick brown fox jumps over the lazy dog',
  variant: 'h1',
};

Subheading.args = {
  children: 'The quick brown fox jumps over the lazy dog',
  variant: 'h6',
};

Caption.args = {
  children: 'The quick brown fox jumps over the lazy dog',
  variant: 'caption',
};

Button.args = {
  children: 'The quick brown fox jumps over the lazy dog',
  variant: 'button',
};

Navlink.args = {
  children: 'The quick brown fox jumps over the lazy dog',
  variant: 'navlink',
};

Link.args = {
  children: 'The quick brown fox jumps over the lazy dog',
  variant: 'link',
};

Overline.args = {
  children: 'The quick brown fox jumps over the lazy dog',
  variant: 'overline',
};
