import {
  footerFirstPortionData,
  secondFooterData,
  secondFooterTwoGridData,
  secondFooterThreeGridData,
  secondFooterFourGridData,
  thirdFooterData,
} from "../Mock";
import { IMAGE } from "../Theme";

const Footer = () => {
  return (
    <>
      <div className="footerContainerDiv">
        <div className="footerInnerContainer">
          <div className="firstFooterDiv">
            <img className="footerLogoImg" src={IMAGE.footerBoatLogo} alt="" />
            <h2>Subscribe to our email alerts!</h2>
            <input
              className="footerInput"
              type="text"
              placeholder="Enter your email address"
            />
          </div>
          <div className="footerFirstParaHeadingDiv">
            {" "}
            {footerFirstPortionData?.map((item) => {
              return (
                <>
                  <div className="footerFirstHeadingDiv">
                    <p className="footerFirstHeadingPara">{item?.heading}</p>
                    <div className="firstFooterPara">
                      {item?.name1?.map((nameItem, index) => {
                        return (
                          <p className="firstPortionParaName">{nameItem}</p>
                        );
                      })}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="footerSecondDiv">
          <div className="footerSecondGridOneDiv">
            {secondFooterData?.map((item, index) => {
              return (
                <>
                  <ol className="footerOrderListDiv">
                    <p className="footerSecondDivHeading">{item?.heading1}</p>
                    <p className="footerSecondDivSubHead">{item?.subHead1}</p>
                    <div className="firstFooterPara">
                      {item?.subPara1?.map((subParaItem, index) => {
                        return (
                          <p className="footerSubParaOne">{subParaItem}</p>
                        );
                      })}
                    </div>
                    <p className="footerSecondDivSubHead">{item?.subHead2}</p>
                    <div className="firstFooterPara">
                      {item?.subPara2?.map((subParaItem, index) => {
                        return (
                          <p className="footerSubParaOne">{subParaItem}</p>
                        );
                      })}
                    </div>
                  </ol>
                </>
              );
            })}
          </div>
          <div className="footerSecondGridOneDiv">
            {secondFooterTwoGridData?.map((item, index) => {
              return (
                <>
                  <ol className="footerOrderListDiv">
                    <p className="footerSecondDivHeading">{item?.heading1}</p>
                    <p className="footerSecondDivSubHead">{item?.subHead1}</p>
                    <div className="firstFooterPara">
                      {item?.subPara1?.map((subParaItem, index) => {
                        return (
                          <p className="footerSubParaOne">{subParaItem}</p>
                        );
                      })}
                    </div>
                    <p className="footerSecondDivSubHead">{item?.subHead2}</p>
                    <div className="firstFooterPara">
                      {item?.subPara2?.map((subParaItem, index) => {
                        return (
                          <p className="footerSubParaOne">{subParaItem}</p>
                        );
                      })}
                    </div>
                  </ol>
                </>
              );
            })}
          </div>
          <div className="footerSecondGridOneDiv">
            {secondFooterThreeGridData?.map((item, index) => {
              return (
                <>
                  <ol className="footerOrderListDiv">
                    <p className="footerSecondDivHeading">{item?.heading1}</p>
                    <p className="footerSecondDivSubHead">{item?.subHead1}</p>
                    <div className="firstFooterPara">
                      {item?.subPara1?.map((subParaItem, index) => {
                        return (
                          <p className="footerSubParaOne">{subParaItem}</p>
                        );
                      })}
                    </div>
                    <p className="footerSecondDivSubHead">{item?.subHead2}</p>
                    <div className="firstFooterPara">
                      {item?.subPara2?.map((subParaItem, index) => {
                        return (
                          <p className="footerSubParaOne">{subParaItem}</p>
                        );
                      })}
                    </div>
                  </ol>
                </>
              );
            })}
          </div>
          <div className="footerSecondGridOneDiv">
            {secondFooterFourGridData?.map((item, index) => {
              return (
                <>
                  <ol className="footerOrderListDiv">
                    <p className="footerSecondDivHeading">{item?.heading1}</p>
                    <p className="footerSecondDivSubHead">{item?.subHead1}</p>
                    <div className="firstFooterPara">
                      {item?.subPara1?.map((subParaItem, index) => {
                        return (
                          <p className="footerSubParaOne">{subParaItem}</p>
                        );
                      })}
                    </div>
                    <p className="footerSecondDivSubHead">{item?.subHead2}</p>
                    <div className="firstFooterPara">
                      {item?.subPara2?.map((subParaItem, index) => {
                        return (
                          <p className="footerSubParaOne">{subParaItem}</p>
                        );
                      })}
                    </div>
                  </ol>
                </>
              );
            })}
          </div>
        </div>
        <div className="footerThirdDiv">
          <div className="footerParaImgDiv">
            <p>
              <b>Let's get social</b>
            </p>
            {thirdFooterData?.map((item, index) => {
              return (
                <img
                  className="thirdFooterSocialImg"
                  src={item?.image}
                  alt={item}
                />
              );
            })}
          </div>
          <div className="privacyParaDiv">
            <ul className="unorderedPrivacyList">
              Privacy Policy
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="thirdFooterLastPara">
            <p>© 2023 Imagine Marketing Limited. All Rights Reserved.</p>
            <p className="lastPara">
              For queries contact us: Manager, Imagine Marketing Limited Unit
              no. 204 & 205, 2nd floor, D-wing & E-wing,<br></br> Corporate
              Avenue, Andheri Ghatkopar Link Road, Mumbai, Maharashtra-400093,
              India
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
