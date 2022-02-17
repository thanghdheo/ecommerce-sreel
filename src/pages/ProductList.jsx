import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Products from "../components/Products";

function ProductList(props) {
  const { categories } = props;
  const { category } = useParams();
  const [active,setActive] = useState(category)
  const [sort,setSort] = useState('asc')

  console.log(category)

  useEffect(() => {
    setActive(category)
  },[category])

  return (
    <Container>
      <NavBar  categories={categories}/>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Product :</FilterText>
          <Link  to={`/products/all`} >
          <Button style={active === 'all' ? {color:'#fff',backgroundColor: '#000'} : {}}>all</Button>
          </Link>
          {categories?.map(category => (
              <Link  to={`/products/${category}`} key={category}>
                <Button style={category === active ? {color:'#fff',backgroundColor: '#000'} : {}} key={category}>{category}</Button>
              </Link>
          ))}
        </Filter>
        <Filter>
          <FilterText>Sort Product :</FilterText>
          <Select onChange={e => setSort(e.target.value)}>
            <Option value="asc">Price (asc) </Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} sort={sort}/>
      <Hr />
      <Footer />
    </Container>
  );
}

const Hr = styled.hr`
  border: 1px solid #ccc;
  margin: 12px;
`;

const Container = styled.div`
  margin: 60px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 15px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

const Button = styled.button`
  border: 1px solid #000;
  background-color: #fff;
  cursor: pointer;
  padding: 12px 24px;
  border-radius: 5px;
  margin: 0 4px;
  text-transform: uppercase;

  &:hover {
    color: #fff;
    background-color: #000;
    transition: all 0.5s ease;
  }
`;

export default ProductList;
