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

const Description = styled.p`
  display: flex;
  margin-bottom: 15px;
  width: 100%;
  height: 100%;
  font-family: ${({ theme }) => theme.fonts.subFont2};
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
console.log(state.isloading)
  const handleDelete = (id) => {
    dispatch(deleteBookRequest(id));
  };

  React.useEffect(() => {
    dispatch(showBookRequest());
  }, []);

  return (
    <List>
      {state && state.savedBooks && state.savedBooks.length != 0 ?
        state.savedBooks.map((book) => {
          return (
            <Item key={book._id}>
              <ImageWrapper>
                <Title>{state.isloading ? <Skeleton count={2} />  : book.title}</Title>
               { state.isloading ? <Skeleton count={6} /> :
                <Description>
                  {book.description &&
                    book.description.substring(0, 1200) + " ..."}
                </Description> }
                <Authors>
                { state.isloading ? <Skeleton height={40} width={360} /> :
                <>
                  <span>Authors: </span>
                  {book.authors?.map((author, index) => (
                    <li key={index}> {author} </li>
                  ))}
                  </>
        }
                </Authors>

                {state.isloading ? <Skeleton width={200} height={250} /> :<Image src={book.imageLinks?.smallThumbnail} />}

                <Wrap>
                 {state.isloading ? <Skeleton width={130} height={45} /> : <a>
                    <Button target="_blank" large>
                      View book
                    </Button>
                  </a>}
                  {state.isloading ? <Skeleton width={130} height={45} /> : <Button
                    target="_blank"
                    primary
                    large
                    onClick={() => handleDelete(book._id)}
                  >
                    Delete book
                  </Button> }
                </Wrap>
              </ImageWrapper>
            </Item>
          );
        }) : <p>No books</p>
      }
    </List>
  );
}
