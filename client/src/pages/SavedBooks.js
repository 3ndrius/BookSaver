import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showBookRequest } from "../redux/actions";
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
  margin-bottom: 5px;
  width: 100%;
  height: 200px;
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
  const state = useSelector((state) => state);
  console.log("state", state.savedBooks.books);
  const [isloading, setLoad] = React.useState(true);

  setTimeout(() => {
    setLoad(false);
  }, 2000);
  React.useEffect(() => {
    dispatch(showBookRequest());
  }, [dispatch, isloading]);
  return (
    <List>
      {state && state.savedBooks.books ? (
        state.savedBooks.books.map((book) => {
          return (
            <Item key={book._id}>
              <ImageWrapper>
                <Title>{book.title}</Title>
                <Description>{book.description}</Description>
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
