import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";

function Products(props) {
  const { category,sort } = props;
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);

  useEffect(() => {
    const getProducts = async () => {
      await axios
        .get(
          category !== 'all'
            ? `https://fakestoreapi.com/products/category/${category}`
            : `https://fakestoreapi.com/products`
        )
        .then((res) => {
          setProducts([...res.data]);
          setFilter([...res.data]);
        });
    };

    getProducts();
  }, [category]);

  useEffect(() => {
   if (sort === "asc") {
      setFilter((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilter((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  },[sort])

  return (
    <Container>
      <Wrapper>
        {category? filter?.map((product) => (
          <ProductItem
            id={product.id}
            img={product.image}
            key={product.id}
            title={product.title}
            price={product.price}
            products={products}
          />
        )):
        products?.slice(0,8).map((product) => (
          <ProductItem
            id={product.id}
            img={product.image}
            key={product.id}
            title={product.title}
            price={product.price}
          />
        ))
        }
      </Wrapper>
    </Container>
  );
}

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 32px;
`;

export default Products;
