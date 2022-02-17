import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";

function Categories(props) {

  const {categories} = props
  
  return (
    <Container>
      {categories?.map((category) => (
        <Link to={`/products/${category}`} key={category}>
          <Category>
            <CategoryItem img="/block_home_category1_new.webp" />
            <CategoryText>{category}</CategoryText>
          </Category>
        </Link>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 24px 0;
`;

const Category = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryText = styled.h1`
  color: #fff;
  background-color: #000;
  margin: 0 20px;
  text-align: center;
  position: absolute;
  border-radius: 15px;
  left: 0;
  right: 0;
  text-transform: uppercase;
`;

export default Categories;
