import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showBookRequest, deleteBookRequest } from "../redux/actions";
import { List } from "../components/List";
import styled from "styled-components";
import { Button } from "../components/Button";
import Skeleton from "react-loading-skeleton";

const Item = styled.li`
  padding: 5px;
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  display: block;
  height: 250px;
  margin: 20px 0;
  width: 200px;
`;
const Title = styled.h1`
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.semiBold};
`;

const Description = styled.div`
  display: flex;
  margin-bottom: 15px;
  width: 100%;
  height:100%;
  font-family: ${({ theme }) => theme.fonts.subFont2};
  color: ${({ theme }) => theme.dark300};
`;

const Authors = styled.ul`
  text-transform: capitalize;
  font-weight: ${({ theme }) => theme.bold};
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: square;
  padding: 0;
  li {
    margin: 0 16px;
  }
  span {
    margin-right: 25px;
  }
`;
const Wrap = styled.div`
  align-self: flex-end;
  max-width: 300px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default function SavedBooks() {
  const dispatch = useDispatch();
  const sdispatch = useDispatch();

  const state = useSelector((state) => state);
  console.log("state", state.savedBooks);
  const [isloading, setLoad] = React.useState(true);

  const handleDelete = (id) => {
      sdispatch(deleteBookRequest(id));
      console.log("Test handle delete");
  }

  setTimeout(() => {
    setLoad(false);
  }, 2000);
  React.useEffect(() => {
    dispatch(showBookRequest());
  }, [dispatch, isloading, sdispatch]);
  return (
    <List>
      {state && state.savedBooks ? (
        state.savedBooks.map((book) => {
          return (
            <Item key={book._id}>
              <ImageWrapper>
                <Title>{book.title}</Title>
                <Description>{book.description && book.description.substring(0, 1200) + " ..."}</Description>
                <Authors>
          
          <span>Authors: </span>
          {book.authors?.map((author, index) => (
            <li key={index}> {author} </li>
          ))}
        </Authors>
                <Image src={book.imageLinks?.smallThumbnail}/>

                <Wrap>
                  <a >
                    <Button target="_blank" large >
                      View book
                    </Button>
                  </a>
                  <Button target="_blank" primary large onClick={() => handleDelete(book._id)}>
                      Delete book
                    </Button>
                </Wrap>
              </ImageWrapper>
            </Item>
          );
        })
      ) : (
        <p>No books</p>
      )}
    </List>
  );
}
