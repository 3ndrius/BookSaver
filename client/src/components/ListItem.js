import styled from "styled-components";
import React from "react";
import { Button } from "./Button";
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

const Content = styled.div`
  padding: 30px 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.semiBold};
`;

const Description = styled.div`
  display: flex;
  margin-bottom: 5px;
  font-family: ${({ theme }) => theme.fonts.subFont2};
  color: ${({ theme }) => theme.dark300};
`;

const Authors = styled.span`
  text-transform: capitalize;
  font-weight: ${({ theme }) => theme.bold};
  margin: 10px 0;
`;
const Wrap = styled.div`
  align-self: flex-end;
  max-width: 300px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default function ListItem(props) {
  const {title, description, authors, imageLinks, infoLink} = props.book;
  return (
    <Item >
      <ImageWrapper src={imageLinks?.smallThumbnail}>
        <Title>{title}</Title>
        <Description>
          {description}
        </Description>
  <Authors>
    {
      authors?.map((author, index) =>(<p key={index}>{author}</p>))
    }
    </Authors>
        <Image />

        <Wrap>
          <Button large primary>
            Save book
          </Button>
          <a src={infoLink}><Button large>View book</Button></a>
        </Wrap>
      </ImageWrapper>
    </Item>
  );
}
