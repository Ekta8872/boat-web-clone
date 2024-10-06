import logo from "../Assets/Image/boatLogoSmall.jpg";
import profile from "../Assets/Image/profile.webp";
import searchImg from "../Assets/Image/search.webp";
import React from "react";
import "./Style.css";
const NavBar = () => {
  return (
    <div style={Styles.firstNavBarDiv}>
      <div>
        <img style={Styles.logo} src={logo} alt="" />
      </div>
      <div style={Styles.navBarDiv}>
        <nav>
          <ul style={Styles.ul}>
            <li style={Styles.list}>
              <a className="anchor" style={Styles.navBar} href="#">
                Categories{" "}
              </a>
              <a style={Styles.navBar} href="#">
                Daily Deals
              </a>
              <a style={Styles.navBar} href="#">
                Gift With BoAt
              </a>
              <a style={Styles.navBar} href="#">
                More
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div style={Styles.inputGridDiv}>
        <div style={Styles.inputDiv}>
          <label style={Styles.label}> </label>
          <input
            style={Styles.inputBox}
            type="search"
            name="q"
            autocomplete="off"
            aria-label="Search"
            placeholder="Search Earphone"
          />
        </div>
        <div style={Styles.profileDiv}>
          <img style={Styles.profileImg} src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};
export default NavBar;

const Styles = {
  list: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    gridGap: "0rem",
    flex: "0.3 1 0",
    fontSize: "36px",
    fontWeight: "400",
  },
  ul: {
    fontSize: "20px",
  },
  a: {
    textDecoration: "none",
    justifyContent: "center",
    color: "#505050",
    fontSize: "36px",
    textTransform: "capitalize",
  },
  anchor: {
    textDecoration: "none",
    justifyContent: "center",
    color: "#505050",
    fontSize: "36px",
    textTransform: "capitalize",
  },
  navBarDiv: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginLeft: "20px",
  },
  navBar: {
    listStyle: "none",
    // flexWrap: "wrap",
    rowGap: "10px",
    textDecoration: "none",
    display: "grid",
    color: "#505050",
    fontSize: "16px",
    marginLeft: "40px",
  },
  logo: {
    width: "85px",
    display: "block",
    // position: "relative",
    margin: "25px 22px 19px 39px",
  },
  firstNavBarDiv: {
    display: "flex",
    gridTemplateColumns: "auto auto auto",
    // float: "left",
    justifyContent: "flex-start",
    backgroundColor: "white",
    width: "100%",
    position: " Sticky",
    zIndex: 11111,
    top: "0",
    left: "0",
    width: "100%",
    // zIndex: "10",
    boxShadow: " 0 1px #afafaf73",
  },
  profileImg: {
    width: "20px",
    alignItems: "center",
    justifyContent: "center",
  },
  inputGridDiv: {
    display: "flex",
    gridTemplateColumns: "auto auto",
  },
  profileDiv: {
    alignItems: "center",
    display: "flex",
  },
  inputBox: {
    backgroundColor: "#f4f5f7",
    border: "none",
    padding: "11px 35px",
    borderRadius: "18px",
    alignItems: "center",
    width: "331px",
    backgroundImage: " url(searchImg.webp)",
  },
  inputDiv: {
    alignItems: "center",
    justifyContent: "flex-end",
    display: "flex",
  },
  label: {
    borderRadius: "2em",
  },
};
