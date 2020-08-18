import React from 'react';
import { Pane, Text } from 'evergreen-ui';
import styled from 'styled-components';

export const MovieItem = ({ title, contents, src }) => {
  return (
    <Pane
      elevation={3}
      float="left"
      width={280}
      height={400}
      overflow="scroll"
      margin={24}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <img src={src} alt="영화썸네일"></img>
      <Header>{title}</Header>
      <Subhead height="600px" size={300}>
        {contents}
      </Subhead>
    </Pane>
  );
};

const Header = styled.text`
  font-size: 12px;
  font-weight: bold;
  padding: 8px;
`;
const Subhead = styled.text`
  font-size: 9px;
  padding: 4px 24px;
`;
