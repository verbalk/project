import React, { useState, useEffect } from 'react';
import './App.css';
import Search from 'react-search';
import styled from 'styled-components';
import Component from '@reactions/component';
import {
  Pane,
  Heading,
  SelectMenu,
  Button,
  Menu,
  SearchInput,
} from 'evergreen-ui';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { MovieList } from './MovieList';

function App() {
  const [movieItems, setMovieItems] = useState(null);
  const [text, setText] = useState('');
  const getMovieInfo = async () => {
    const response = await axios.get(
      'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
    );
    setMovieItems(response.data.data.movies);
  };

  const submit = () => {
    setMovieItems(movieItems.filter((movies) => movies.title === text));
  };

  useEffect(() => {
    getMovieInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [genres, setGenres] = useState([]);

  return (
    <Pane clearfix>
      <Top>
        <Pane display="flex" padding={16} background="dark" borderRadius={3}>
          <Pane flex={1} alignItems="center" display="flex">
            <Heading display="contents" color={'white'} size={400}>
              <img style={{ marginRight: 4 }} src="./glogow.svg" />
              GHOST MOVIE
            </Heading>
          </Pane>

          <Pane>
            <SearchInput
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />

            <Component
              initialState={{
                options: [
                  'Drama',
                  'Comedy',
                  'Mystery',
                  'Adventure',
                  'Action',
                ].map((label) => ({ label, value: label })),
                selected: [],
              }}
            >
              {({ state, setState }) => (
                <SelectMenu
                  isMultiSelect
                  title="장르별"
                  options={state.options}
                  selected={state.selected}
                  onSelect={(item) => {
                    const selected = [...state.selected, item.value];
                    const selectedItems = selected;
                    const selectedItemsLength = selectedItems.length;
                    let selectedNames = '';
                    if (selectedItemsLength === 0) {
                      selectedNames = '';
                    } else if (selectedItemsLength === 1) {
                      selectedNames = selectedItems.toString();
                    } else if (selectedItemsLength > 1) {
                      selectedNames =
                        selectedItemsLength.toString() + ' selected...';
                    }

                    setGenres(selected);
                    setState({
                      selected,
                      selectedNames,
                    });
                  }}
                  onDeselect={(item) => {
                    const deselectedItemIndex = state.selected.indexOf(
                      item.value
                    );
                    const selectedItems = state.selected.filter(
                      (_item, i) => i !== deselectedItemIndex
                    );
                    const selectedItemsLength = selectedItems.length;
                    let selectedNames = '';
                    if (selectedItemsLength === 0) {
                      selectedNames = '';
                    } else if (selectedItemsLength === 1) {
                      selectedNames = selectedItems.toString();
                    } else if (selectedItemsLength > 1) {
                      selectedNames =
                        selectedItemsLength.toString() + ' selected...';
                    }
                    setGenres(selectedItems);
                    setState({ selected: selectedItems, selectedNames });
                  }}
                >
                  <Button>{state.selectedNames || '장르별 검색'}</Button>
                </SelectMenu>
              )}
            </Component>
          </Pane>
        </Pane>
      </Top>
      <Route path="/:movieName" exact>
        {/* <MovieList movieItems={movieItems} text={text} genres={genres} /> */}
      </Route>
      <Route path="/" exact>
        <MovieList movieItems={movieItems} text={text} genres={genres} />
      </Route>
    </Pane>
  );
}

export default App;

const Top = styled.div`
  background: #425a70;
  box-shadow: 0px 1px 5px rgba(67, 90, 111, 0.3);
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  clear: both;
  margin-top: 4px;
`;

const ContainerLeft = styled.div`
  display: flex;
  background: #f9f9fb;
  width: 30%;
  height: 3000px;
  float: left;
`;
const Menuwidth = styled.div`
  width: 100%;
`;

const ContainerRight = styled.div`
  background: none;
  width: 70%;
  height: 100%;
  float: right;
`;
