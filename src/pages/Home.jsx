import { NewReleases } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slide from "../components/Slide";

function Home(props) {
  const {categories} = props
  return (
    <Container>
      <NavBar  categories={categories}/>
      <Slide />
      <Categories categories={categories} />
      {/* <Announcement />
      <Products /> */}
      <Newsletter />
      <Hr />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
    overflow-x: hidden;
`

const Hr = styled.hr`
  border: 1px solid #ccc;
  margin: 12px;
`

export default Home;
