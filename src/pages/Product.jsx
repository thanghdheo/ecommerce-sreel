import axios from "axios";
import React, { useEffect, useState, useD } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Products from "../components/Products";
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import './styles.css'
import { addProduct } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";

function Product(props) {
  const {categories} = props
  const{ id }= useParams()

  const dispatch = useDispatch()

  const [product,setProduct] = useState({})
  const [quantity,setQuantity] = useState(1)

  useEffect(() => {
    const getProducts = async () => {
      await axios
        .get(
            `https://fakestoreapi.com/products/${id}`
        )
        .then((res) => {
          setProduct(res.data)
        });
    };

    getProducts();
  }, [id]);

  const handleAddBuy = () => {
    dispatch(addProduct({
      ...product,
      quantity
    }))
  }
  
  return (
    <>
      <NavBar categories={categories}/>
      <Container>
        <Wrapper>
        <ProductInfo>
          <Title>THÔNG TIN</Title>
          <Desc>
            {product.description}
          </Desc>
          <Br/>
          <Desc>
          Sản phẩm được vận chuyển từ 2-3 ngày. 
          </Desc>
          <Br />
          <Desc>
          Thiết kế và sản xuất bởi Hades Studio.
          </Desc>
          <Hr />
          <SubFooter>
            HADES™ ✦ STREETWEAR
            BRAND LIMITED ✦ Copyright © 2021 Hades. All rights reserved. 
          </SubFooter>
        </ProductInfo>
        <ProductImage src={product.image} />
        <ProductDesc>
            <DescTitleImage src="https://file.hstatic.net/1000306633/file/new_arrivals_283d7b8f2ab1443490b85f4c7732fcc5.svg" />
            <DescTitle>{product.title}</DescTitle>
            <DescSKU>SKU: T60122SB</DescSKU>
            <DescPrice>{product.price}đ</DescPrice>
            <p style={{fontSize : '10px',padding: '8px 0'}}>Đánh giá</p>
            <SizeContainer>
                {/* <SizeItem className="active">
                    S
                </SizeItem> */}
                {/* <SizeItem>
                    M
                </SizeItem>
                <SizeItem>
                    L
                </SizeItem> */}
                <SizeItem>
                    {product.rating?.rate}
                    <StarBorderPurple500Icon style={{padding: '0px 4px'}}/>
                </SizeItem>
            </SizeContainer>
            <ButtonContainer>
                <ButtonCard onClick={handleAddBuy}>THÊM VÀO GIỎ</ButtonCard>
                {/* <ButtonBuy>MUA NGAY</ButtonBuy> */}
            </ButtonContainer>
        </ProductDesc>
        </Wrapper>
      </Container>
      <Hr />
      <Footer />
    </>
  );
}

const Container = styled.div` 
  margin-top: 60px;
  padding :50px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Title = styled.h4`
    padding: 20px 0; 
`;

const Desc = styled.p`
    font-size: 10px;
`;

const Br = styled.br`

`

const SubFooter = styled.div`
    font-size: 12px;
    color: #adacac;
`;

const ProductInfo = styled.div`
  flex: 1;
  padding-top:100px;
`;

const ProductImage = styled.img`
  flex: 2;
  width: 33.33333%;
  height: 100%;
  object-fit: cover;
`;

const ProductDesc = styled.div`
  flex: 1;
  border-left: 1px solid #000;
  padding: 80px;
`;

const Hr = styled.hr`
    border: 1px solid #ccc;
    margin: 12px;
`;

const DescTitleImage = styled.img`
    width: 100%;
`
const DescTitle = styled.h3`
  padding: 8px 0;
`

const DescSKU = styled.p`
  padding: 8px 0;
  color: #adacac;
  font-size: 13px;
`

const DescPrice = styled.p`
  padding: 8px 0;
  font-weight: 500;
  font-size: 18px;
  color: #5e5c5c;
`

const SizeContainer = styled.div`
  padding: 8px 0;
  display: flex;

`

const SizeItem = styled.div`
  padding:10px 0;
  /* border: 1px solid #585757; */
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonContainer = styled.div`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
`

const ButtonCard = styled.button`
  margin-bottom: 12px;
  padding: 12px 0;
  font-weight: 600;
  background-color: #fff;
  color: #000;
  border: 1px solid #747373;
  font-size: 12px;
  cursor: pointer;

  &:hover{
    background-color: #000;
    color: #fff;
  transition: all 0.5s ease;
  }
`

const ButtonBuy = styled(ButtonCard)`
  margin-bottom: 12px;
  padding: 12px 0;
  font-weight: 600;
  color: #fff;
  background-color: #000;
  border: 1px solid #747373;
`

export default Product;
