import React, { HTMLAttributes, useContext } from 'react';
import Typography from './Typography';
import styled from '@emotion/styled';
import Themes, { Theme } from '../theme/Themes';
import ThemeContext from '../theme/ThemeContext';

export interface MyCustomProps extends Theme {
  circle?: boolean;
  icolor?: string;
  tcolor?: string;
}
export type CombinedProps = MyCustomProps & HTMLAttributes<HTMLDivElement>;

const List: React.FC<CombinedProps> = ({ circle, children, ...props }) => {
  const { dark } = useContext(ThemeContext);
  const theme = Themes[dark === false ? 'light' : 'dark'];

  return (
    <StyledList {...props}>
      {circle ? (
        <Circle {...props} theme={theme} />
      ) : (
        <Line {...props} theme={theme} />
      )}
      <Typography color={props.tcolor}>{children}</Typography>
    </StyledList>
  );
};

export default List;

const StyledList = styled.div`
  display: flex;
`;

const Line = styled.div<CombinedProps>`
  height: 2px;
  min-width: 1rem;
  margin-top: 11px;
  margin-right: 8px;
  background-color: ${(p) => (p.icolor == null ? p.theme.secondary : p.icolor)};
`;

const Circle = styled.div<CombinedProps>`
  min-width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-top: 8px;
  margin-right: 8px;
  margin-left: 8px;
  background-color: ${(p) => (p.icolor == null ? p.theme.secondary : p.icolor)};
`;
