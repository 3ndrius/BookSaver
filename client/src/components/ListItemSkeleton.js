import styled from "styled-components";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-toastify/dist/ReactToastify.css";
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

export default function ListItem() {
  return (
    <Item>
      <ImageWrapper>
        <Title>
          <Skeleton count={2} />
        </Title>
        <Skeleton count={6} />
        <Authors>
          <Skeleton height={40} width={350} />
        </Authors>
        <Skeleton height={250} width={200}>
          <Image />
        </Skeleton>
        <Wrap>
          <Skeleton height={45} width={130} />
          <Skeleton height={45} width={130} />
        </Wrap>
      </ImageWrapper>
    </Item>
  );
}
