import React from 'react';
import { Pane, StarIcon } from 'evergreen-ui';
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
      padding={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <img src={src} alt="영화썸네일"></img>
      <Header>{title}</Header>
      <Subhead height="600px" size={300}>
        <Display>
          <StarIcon size={12} color="#85a5ff" />
          {contents}
        </Display>
      </Subhead>
    </Pane>
  );
};

const Header = styled.span`
  font-size: 12px;
  text-align: center;
  padding: 8px 8px 0px 8px;
`;
const Subhead = styled.span`
  font-size: 18px;
  font-weight: bold;
  padding: 4px 24px;
  color: #4e7496;
`;
const Display = styled.div`
  display: contents;
`;
