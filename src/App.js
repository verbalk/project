import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import { Pane, Heading, Select } from 'evergreen-ui';
import { MovieItem } from './MovieItem';
import axios from 'axios';

function App() {
  const [movieItems, setMovieItems] = useState(null);
  const getMovieInfo = async () => {
    const response = await axios.get(
      'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
    );
    setMovieItems(response.data.data.movies);
  };

  useEffect(() => {
    getMovieInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [genres] = useState(['장르별', '스릴러', '공포', '드라마', '코미디']);
  const [selectedGenres, setSelectedGenres] = useState('장르별');

  return (
    <Pane clearfix>
      <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
        <Pane flex={1} alignItems="center" display="flex">
          <Heading size={400}>영화 추천 리스트</Heading>
        </Pane>
        <Pane>
          <Select
            value={selectedGenres}
            onChange={(event) => setSelectedGenres(event.target.value)}
          >
            {genres.map((genreItem) => (
              <option key={genreItem} value={genreItem}>
                {genreItem}
              </option>
            ))}
          </Select>
        </Pane>
      </Pane>
      {movieItems &&
        movieItems.map((movieItem) => {
          return (
            <MovieItem
              key={movieItem.id}
              title={movieItem.title}
              contents={movieItem.synopsis}
              src={movieItem.medium_cover_image}
            />
          );
        })}
    </Pane>
  );
}

export default App;
