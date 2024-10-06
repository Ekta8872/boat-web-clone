import React, { useEffect, useState } from "react";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import "./StyleHome.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

// package
import "react-responsive-carousel/lib/styles/carousel.min.css"; //? requires a loader
import { Carousel } from "react-responsive-carousel";
// Mock Data
import {
  bestSellerData,
  shoppingWarrantyData,
  newLaunchData,
  categoryShopData,
  dailyDealsData,
  lifestyleData,
  bestOfBoatData,
  homeScrollImgData,
  videoTribeData,
  buttonData,
} from "../../Mock";
import { IMAGE } from "../../Theme";
import CountDown from "../Home/countDown";

const Home = () => {
  const navigation = useNavigate();
  // const history = useHistory();
  const [bestBoat, setBestBoat] = useState("bestSeller");
  const [buttonID, setButtonID] = useState(1);
  const bestBoatData = bestOfBoatData?.filter(
    (item) => item?.slug === bestBoat
  );
  const handleBestOfBoat = (item) => {
    setBestBoat(item?.value);
    setButtonID(item?.id);
  };

  const handleScrollImage = (item) => {
    let data = {
      id: "Hello World",
    };

    // history.push({
    //   pathname: "/productDetails",
    //   state: "test",
    // });

    navigation(`/productDetails`, { state: "test" });
  };

  return (
    <>
      <NavBar />
      <div className="homeImgDiv">
        <Carousel interval={2000} autoPlay={true} infiniteLoop={true}>
          {homeScrollImgData?.map((item, index) => {
            return (
              <Button onClick={handleScrollImage} className="scrollButton ">
                <img className="homeScrollImg" src={item?.image} />;
              </Button>
            );
          })}
        </Carousel>
      </div>
      <div className="secondDiv">
        <div>
          <p className="tribeHeading">
            Explore <b>Bestsellers</b>
          </p>
        </div>
        <div className="bestSellerDiv">
          {bestSellerData?.map((item, index) => {
            return (
              <div>
                <video
                  loop
                  muted
                  autoPlay={true}
                  onMouseOver={(event) => event.target.play()}
                  onMouseOut={(event) => event.target.pause()}
                  className="bestSellerVideo"
                  src={item?.video}
                />
                <source
                  className="bestSellerVideoSrc"
                  src={item.src}
                  type="video/mp4"
                />
                <p className="itemParaName">{item?.name}</p>
              </div>
            );
          })}
        </div>
        <div>
          <p className="tribeHeading">
            Daily
            <b> Deals</b>
          </p>
        </div>
        <div
          className="timerImgDiv"
          style={{ backgroundImage: `url(${IMAGE.background})` }}
        >
          <div className="timerImgParaDiv">
            <p className="timerImgPara">
              {" "}
              Summer Sale with <b>upto 75%</b> off is here
            </p>
            <p className="timerVerticalLine"></p>
            <CountDown hours={6} minutes={30} />
          </div>
        </div>
        <div className="bestOfBoatDiv">
          {dailyDealsData?.map((item, index) => {
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
        <div>
          <p className="tribeHeading">
            Shop by <b>Categories</b>
          </p>
        </div>
        <div className="categoryShopDataDiv">
          {categoryShopData?.map((item, index) => {
            return (
              <div>
                <img className="categoryShopImg" src={item?.image} />
                <p className="">{item?.name}</p>
              </div>
            );
          })}
        </div>
        <div>
          <p className="tribeHeading">
            New <b>Launches</b>
          </p>
        </div>
        <div className="bestOfBoatDiv">
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
        <div className="shoppingDiv">
          {shoppingWarrantyData?.map((item, index) => {
            return (
              <div className="shoppingImgDiv">
                <img className="ShoppingImg" src={item?.image} alt=" " />
                <p className="shoppingName">{item?.name}</p>
              </div>
            );
          })}
        </div>
        <div>
          <p className="tribeHeading">
            Shop by
            <b> Lifestyle</b>
          </p>
        </div>
        <div className="lifestyleDiv">
          {lifestyleData?.map((item, index) => {
            return (
              <div className="lifeStyleImgParaDiv">
                <img className="lifestyleImg" src={item?.image} />
                <div className="lifeStyleNameParaDiv">
                  <p className="lifeStylePara">{item?.name}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <p className="tribeHeading">
            Best Of<b> boAt</b>
          </p>
        </div>
        <div className="aliyDealsDiv">
          <div className="bestOfButtonDiv">
            {buttonData?.map((item, index) => {
              return (
                <>
                  <button
                    className={
                      buttonID === item.id
                        ? "bestOfBoatButtonActive"
                        : "bestOfBoatButton"
                    }
                    onClick={() => handleBestOfBoat(item)}
                  >
                    {item?.name}
                  </button>
                </>
              );
            })}
          </div>
          <div className="bestOfBoatDiv">
            {bestBoatData?.map((item, index) => {
              return (
                <div className="bestOfBoatImgDiv">
                  <img className="bestBoatImg" src={item?.image} />
                  {/* <span className="imgSuperSaveTagDiv">{item?.superSave}</span> */}
                  <div className="bestOfBoatNameParaDiv">
                    <div>
                      {item?.features && (
                        <p className="bestBoatFeaturesPara">{item?.features}</p>
                      )}
                    </div>
                    <div className="ImgBlockText">
                      <div className="ratingDiv">
                        <div className="ratingImgParaDiv">
                          <img
                            className=" ratingStarImg"
                            src={item?.imageStar}
                          />
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
                          <p className="boatNamePara">
                            {item?.discountedPrice}
                          </p>
                          <p className="originalPricePara">
                            <s>{item?.originalPrice}</s>
                          </p>
                          <p className="percentOffPara">{item?.percentOff}</p>
                        </div>
                        <div className="buttonAddCartDiv">
                          <button className="btnAddToCart">
                            {item?.button}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <p className="tribeHeading">
            Join the<b> Tribe</b>
          </p>
        </div>
        <div className="videoTribeDiv">
          {videoTribeData?.map((item, index) => {
            return (
              <div className="tribeVideoWholeParaDiv">
                <video
                  loop
                  muted
                  autoPlay
                  className="videoTribe"
                  src={item?.video}
                />
                <source src={item.src} type="video/mp4" />
                <div className="tribeVideoImgDiv">
                  <img className="tribeVideoImg" src={item?.image} />
                </div>
                <div className="tribeVideoParaDiv">
                  <p className="tribeVideoPara">{item?.name}</p>
                  <div className="tribepriceParaDiv">
                    <p className="tribeVideoPara">{item?.discountedPrice}</p>
                    <p className="tribeOriginalPricePara">
                      <s>{item?.originalPrice}</s>
                    </p>
                    <p className="tribePercentOffPara">{item?.percentOff}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
