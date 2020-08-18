import React from 'react';
import { Pane, Text } from 'evergreen-ui';

export const MovieItem = ({ title, contents, src }) => {
  return (
    <Pane
      elevation={3}
      float="left"
      width={200}
      height={120}
      margin={24}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <img width="200px" src={src} alt="영화썸네일"></img>
      <Text>{title}</Text>
      <Text size={300}>{contents}</Text>
    </Pane>
  );
};
