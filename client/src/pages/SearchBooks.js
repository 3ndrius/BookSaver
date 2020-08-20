import React from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import styled from "styled-components";
import { List } from "../components/List";
import ListItem from "../components/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { getBooksRequest } from "../redux/actions";
import  ListItemSkeleton from "../components/ListItemSkeleton"
import { motion } from "framer-motion"

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
    dispatch(getBooksRequest(search));
    setSearch("");
  };
  return (
    <motion.div  initial={{ x: '10%', opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: '30%', opacity: 1 }}
    transition={{ ease: "easeOut", duration:1 }}>
      
      <Form onSubmit={handleSearch}>
        <Input onChange={handleInputVal} value={search} />
        <Button large primary>
          Search books
        </Button>
      </Form>
      <List>
        { 
          state.books &&
          state.books.map((book, index) => {
            return(
            state.isloading ? <ListItemSkeleton key={index}/> :
             <ListItem key={book.id} book={book.volumeInfo} isloading={state.isloading} /> 
            )
          })

          
        }
      </List>
    </motion.div>
  );
}
