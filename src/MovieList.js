import React from 'react';
import styled from 'styled-components';
import { MovieItem } from './MovieItem';

export const MovieList = ({ movieItems, text, genres }) => {
  return (
    <Row>
      <ContainerRight>
        {movieItems &&
          movieItems
            .filter((movie) => {
              if (movie.title.toLowerCase().indexOf(text.toLowerCase()) > -1) {
                return true;
              }
              return false;
            })
            .filter((movieItem) => {
              if (genres.length === 0) {
                return true;
              }

              if (
                movieItem.genres.filter((val) => genres.indexOf(val) !== -1)
                  .length === 0
              ) {
                return false;
              }
              return true;
            })
            .map((movieItem) => {
              return (
                <MovieItem
                  key={movieItem.id}
                  title={movieItem.title}
                  contents={movieItem.rating}
                  src={movieItem.medium_cover_image}
                />
              );
            })}
      </ContainerRight>
    </Row>
  );
};

const Row = styled.div`
  width: 100%;
  height: 100%;
  clear: both;
  margin-top: 4px;
`;
const ContainerRight = styled.div`
  background: none;
  width: 70%;
  height: 100%;
  float: right;
`;
