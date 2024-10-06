import React, { useEffect, useState } from "react";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import {
  ProductDetailStormWatchData,
  newLaunchData,
  shoppingWarrantyData,
  productDetailColorData,
} from "../../Mock";
import "./StyleProductDetail.css";
// package
import "react-responsive-carousel/lib/styles/carousel.min.css"; //? requires a loader
import { Carousel } from "react-responsive-carousel";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const [colorName, setColorName] = useState("Black");
  // const [colorImage, setColorImage] = useState("image");

  const colorData = productDetailColorData?.name?.filter(
    (item) => item?.variant === colorName
  );

  const CarouselImage = productDetailColorData?.name?.find(
    (item) => item.variant === colorName
  );
  console.log("111111111111111", CarouselImage);

  const handleOnClickColor = (item) => {
    setColorName(item);
    // setColorImage(item);
  };

  return (
    <>
      <NavBar />
      <div className="productDetailWholeDiv">
        <div className="carouselImgDiv">
          <Carousel>
            {CarouselImage?.colorImage?.map((colorImageItem) => {
              return (
                <div className="productDetailStormImgDiv">
                  <img
                    className="productDetailStormImg"
                    src={colorImageItem}
                    alt=""
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="stormWholeDiv">
          <p className="firstToReview">Be first to review</p>
          <h1 className="stormHeading">Storm Plus</h1>
          <p className="stormPara">
            Smartwatch with 1.78" AMOLED Display, BT Calling, 100+ Sports Modes,
            SpO2 monitoring
          </p>
          <div>
            <span className="stormPricePara">₹2,299 </span>
            <span className="strikePrice">
              <s>₹ 8,999.00</s>
            </span>
            <p className="percentOff">74% Off</p>
          </div>
          <div>
            <p className="colorNamePara">
              <b>Choose your colour :</b>
              {colorData?.map((item, index) => {
                return (
                  <div>
                    <p>{item?.name}</p>
                  </div>
                );
              })}
            </p>
            <div className="colorTagIdDiv">
              {productDetailColorData?.color?.map((colorItem, index) => {
                return (
                  <button
                    onClick={() => handleOnClickColor(colorItem)}
                    key={index}
                    className={
                      colorName === colorItem ? "colorTagActive" : "colorTag"
                    }
                    style={{
                      backgroundColor: `${colorItem}`,
                    }}
                  ></button>
                );
              })}
            </div>
          </div>
          <h3>Check Delivery</h3>
          <div className="inputBtnDiv">
            <div className="inputBoxDiv">
              <input
                className="inputBox"
                type="text"
                placeholder="Enter Pin Code"
              />
            </div>
            <button className="checkBtn">Check</button>
          </div>
          <div>
            <button className="cartBtn">Add To Cart</button>
          </div>
        </div>
      </div>
      <div className="productDetailshoppingDiv">
        {shoppingWarrantyData?.map((item, index) => {
          return (
            <div className="shoppingImgDiv">
              <img className="ShoppingImg" src={item?.image} alt=" " />
              <p className="shoppingName">{item?.name}</p>
            </div>
          );
        })}
      </div>
      <hr className="hrLine"></hr>
      <div>
        <h1 className="alsoLikeHeading">You may also like</h1>
      </div>
      <div className="boatWholeDiv">
        {newLaunchData?.map((item, index) => {
          return (
            <div className="bestOfBoatImgDiv">
              <img className="bestBoatImg" src={item?.image} />

              <div className="bestOfBoatNameParaDiv">
                <div>
                  {item?.features && (
                    <p className="bestBoatFeaturesPara">{item?.features}</p>
                  )}
                </div>
                <div className="ImgBlockText">
                  <div className="ratingDiv">
                    <div className="ratingImgParaDiv">
                      <img className=" ratingStarImg" src={item?.imageStar} />
                      <p className="ratingTextPara">{item?.ratingText}</p>
                    </div>
                    <div className="swatchCircleIdDiv">
                      {item?.color?.map((colorItem, index) => {
                        return (
                          <div
                            className="swatchCircleDiv"
                            style={{
                              backgroundColor: `${colorItem}`,
                            }}
                          ></div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="boatNameButtonDiv">
                    <p className="boatNamePara">{item?.name}</p>
                    <div className="priceParaDiv">
                      <p className="boatNamePara">{item?.discountedPrice}</p>
                      <p className="originalPricePara">
                        <s>{item?.originalPrice}</s>
                      </p>
                      <p className="percentOffPara">{item?.percentOff}</p>
                    </div>
                    <div className="buttonAddCartDiv">
                      <button className="btnAddToCart">{item?.button}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
