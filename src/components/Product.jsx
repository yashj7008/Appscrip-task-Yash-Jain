import React from "react";
import { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
const Product = () => {
  const [products, setProducts] = useState([]);
  

  const filterData = [
    {
      selectName: "IDEAL FOR",
      option: ["men", "women", "baby & kids"],
    },
    {
      selectName: "OCCASION",
      option: ["men", "women", "baby & kids"],
    },
    {
      selectName: "WORK",
      option: ["men", "women", "baby & kids"],
    },
    {
      selectName: "FABRIC",
      option: ["men", "women", "baby & kids"],
    },
    {
      selectName: "SEGMENT",
      option: ["men", "women", "baby & kids"],
    },
    {
      selectName: "SUITABLE FOR",
      option: ["men", "women", "baby & kids"],
    },
  ];

  async function fetchData() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      console.log(products);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="main-content">
        <p
          style={{
            font: "Simplon Norm",
            fontWeight: "400",
            fontSize: "60px",
            lineHeight: "72px",
            padding: 0,
            margin: 0,
            textAlign :"center"
          }}
        >
          DISCOVER OUR PRODUCTS
        </p>
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus{" "}
          <br />
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      <div className="recomandation " style={{marginInline:"25px"}}>
        <div style={{ display: "flex", alignItems:"center", marginRight:"900px" }}>
          <p >{products.length} ITEMS</p>
          <IoIosArrowBack style={{marginLeft:"25px"}} />
          <p>HIDE FILTER</p>
        </div>
        <select name="recommondation">
          <option value="recommandation">RECOMMANDED</option>
          <option value="newest-first">NEWEST FIRST</option>
          <option value="popular">POPULAR</option>
          <option value="high-to-low">PRICE : HIGH TO LOW</option>
          <option value="low-to-high">PRICE : LOW TO HIGH</option>
        </select>
      </div>
      <div className="product-list" style={{ display: "flex", margin: "25px" }}>
        <div
          className="filters"
          style={{
            display: "flex",
            flexDirection: "column",
            marginInline: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <input type="checkbox" id="customizable" name="customizable" />
            <label
              htmlFor="customizable"
              style={{ fontWeight: "bold", cursor: "pointer" }}
            >
              CUSTOMIZABLE
            </label>
          </div>

          {filterData.map((category, index) => (
            <div key={index}>
              <h4 style={{ cursor: "pointer" }}>{category.selectName}</h4>
              <p>All</p>
              <p style={{ color: "gray", fontWeight: "200" }}>UNCHECKED ALL</p>
              {category.option.map((option, idx) => {
                const key = `${category.selectName}-${option}`;
                return (
                  <div key={idx}>
                    <input type="checkbox" id={key} name={key} />
                    <label htmlFor={key}>{option}</label>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="product-wrapper">
          {products.map((product, index) => {
            return (
              <div key={product.id} className="product-cart">
                <img src={product.image} alt="product.title" />
                <div style={{position:"relative"}}>
                  <p style={{fontFamily :"Simplon Norm", fontWeight:"700" , fontSize:"18px" ,overflow: "hidden",whiteSpace: "nowrap",textOverflow: "ellipsis"}}>{product.title}</p>
                  <p style={{fontFamily :"Simplon Norm", fontWeight:"400" , fontSize:"14px" ,color: '#888792'}}>Sign in or Create an account to see pricing</p>
                  <CiHeart
                    style={{
                      position: "absolute",
                      right: "2px",
                      bottom: "2px",
                      width : "24px",
                      height : "24px"
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
