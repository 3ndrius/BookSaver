import styled from "styled-components";
import React from "react";
import { Button } from "./Button";
import { useDispatch } from "react-redux";
import { saveBookRequest } from "../redux/actions";
import Skeleton from "react-loading-skeleton";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

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
  margin-bottom: 5px;
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

export default function ListItem(props) {
  const { title, description, authors, imageLinks, infoLink } = props.book;
  const dispatch = useDispatch();
  const isloading = props.isloading;
  const handleSave = (book) => {
    dispatch(saveBookRequest(book));
  };
  return (
    title ? 
    <Item>
      <ImageWrapper>
        <Title>{isloading ? <Skeleton count={2} /> : title}</Title>
        <Description>{description}</Description>
        <Authors>
          {" "}
          <span>Authors: </span>
          {authors?.map((author, index) => (
            <li key={index}> {author} </li>
          ))}
        </Authors>
        <Image src={imageLinks?.smallThumbnail} />

        <Wrap>
          <Button
            large
            primary
            onClick={() => {
              handleSave({ title, authors, description, imageLinks, infoLink });
            }}
          >
            Save book
          </Button>

          <a href={infoLink} target="_blank" rel="noopener noreferrer" >
            <Button  large>
              View book
            </Button>
          </a>
        </Wrap>
      </ImageWrapper>
    </Item> : <p>No books</p> 
  );
}
ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.array,
  image: PropTypes.object,
  infoLink: PropTypes.string
};