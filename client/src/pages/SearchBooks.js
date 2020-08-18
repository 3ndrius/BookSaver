import React from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import styled from "styled-components";
import { List } from "../components/List";
import ListItem from "../components/ListItem";
import { useDispatch, useSelector } from "react-redux";

import { getBooksRequest } from '../redux/actions';

const Form = styled.form`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;

export default function SearchBooks() {
  const [search, setSearch] = React.useState("");

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleInputVal = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
    dispatch(getBooksRequest(search));
  };
    
  return (
    <>
      <Form onSubmit={handleSearch}>
        <Input onChange={handleInputVal} />
        <Button large primary>
          Search books
        </Button>
      </Form>
      <List>
        {console.log("consolelog", state.books) }
        {state.books && state.books.map((book, index) => {
          return (
            <ListItem key={index} book={book.volumeInfo} />
          )
        })}
      </List>
    </>
  );
}
