import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar(props) {
  const { categories } = props;

  const cart = useSelector((state) => state.carts);
  const user = useSelector((state) => state.users);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link style={{ textDecoration: "none" }} to="/">
            <Logo>SREEL.</Logo>
          </Link>
          <Menu>
            <Link to={`/products/all`}>
              <MenuItem>Shop</MenuItem>
            </Link>
            {categories?.map((category) => (
              <Link
                to={`/products/${category}`}
                key={category}
                style={{ textDecoration: "none" }}
              >
                <MenuItem>{category}</MenuItem>
              </Link>
            ))}
          </Menu>
        </Left>
        <Right>
          <SearchBox>
            <InputSearch placeholder="Search...." />
            <SearchIcon />
          </SearchBox>
          {
            user.name === ''?
            <div>
            <Link to="/login">
              <MenuRight>Đăng nhập</MenuRight>
            </Link>
            /
            <Link to="/register">
              <MenuRight>Đăng ký</MenuRight>
            </Link>
          </div>
          :
          <div>
           <MenuRight>{user.name}</MenuRight>
          </div>
          }
          <MenuRight>
            <Link to="/cart">
              <Badge badgeContent={cart.quantity} color="primary">
                <ShoppingCartIcon color="action" />
              </Badge>
            </Link>
          </MenuRight>
        </Right>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 60px;
  color: #272727;
  font-size: 12px;
  font-weight: 700;
  opacity: 0.8;
  box-shadow: 0 2px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: white;
`;
const Wrapper = styled.div`
  padding: 0 50px;
  height: 60px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Logo = styled.h1`
  opacity: 1;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  text-transform: uppercase;
`;

const MenuItem = styled.li`
  margin: 0 18px;
  display: inline-block;
  word-wrap: normal;
  position: relative;
  &::before {
    content: " ";
    height: 2px;
    left: 0;
    right: 0;
    bottom: -6px;
    background-color: #000;
    position: absolute;
    opacity: 0;
    transform-origin: left center;
    transition: all 260ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    transform: scaleX(0);
  }

  &:hover {
    :before {
      transform: scaleX(1);
      opacity: 1;
    }
  }
`;

const MenuRight = styled.span`
  padding: 0 12px;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
`;

const InputSearch = styled.input`
  padding: 8px;
  margin-right: 4px;
  border: none;
`;

export default NavBar;
