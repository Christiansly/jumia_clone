import React from "react";
import jumiaLogo from "./jumia-logo.png";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MenuListComposition from "./DropdownMenu";
import { Link } from "react-router-dom";
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
function Navbar() {
  return (
    <nav className="appnavbar shadow sticky-top">
      <Link to="/" className="appnavbar__title">
        <img src={jumiaLogo} alt="" width="120px" />
      </Link>
      <form className="searchbar">
        <div className="searchbar__content">
          <div className="search-icon">
            <SearchIcon />
          </div>

          <input
            className="input"
            type="search"
            placeholder="Search products, brands and categories"
            aria-label="Search"
          />
        </div>

        <button className="search-button shadow" type="submit">
          Search
        </button>
      </form>
      <div className="navbar__menu">
        <div className="menu-item" style={{ zIndex: 99999 }}>
          <PermIdentityIcon />
          <MenuListComposition
            title="Login"
            items={[
              <Link
                to="login"
                style={{ color: "black", textAlign: "center", width: "100%" }}
              >
                <button
                  className="search-button shadow"
                  style={{ width: "70%", fontSize: "small" }}
                >
                  LOGIN
                </button>
              </Link>,
              <Link
                to="create"
                style={{
                  color: "#E4822c",
                  textAlign: "center",
                  width: "100%",
                  fontSize: "small",
                }}
              >
                CREATE AN ACCOUNT
              </Link>,
              <Link
                to="account"
                style={{ color: "black", textAlign: "center" }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <PermIdentityIcon />
                  <div style={{ marginLeft: "1rem", fontSize: "small" }}>
                    Account
                  </div>
                </div>
              </Link>,
              <Link to="order" style={{ color: "black", textAlign: "center" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "small",
                  }}
                >
                  <BrandingWatermarkIcon />
                  <div style={{ marginLeft: "1rem" }}>Order</div>
                </div>
              </Link>,
              <Link
                to="saved-item"
                style={{ color: "black", textAlign: "center" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "small",
                  }}
                >
                  <FavoriteBorderIcon />
                  <div style={{ marginLeft: "1rem" }}>Saved Item</div>
                </div>
              </Link>,
            ]}
          />
        </div>
        <div className="menu-item" style={{ zIndex: 99999 }}>
          <HelpOutlineIcon />
          <MenuListComposition
            title="Help"
            items={[
              <Link to="help" style={{ color: "black" }}>
                Help Center
              </Link>,
              <Link to="help" style={{ color: "black" }}>
                Place &amp; track order
              </Link>,
              <Link to="help" style={{ color: "black" }}>
                Order Cancellation
              </Link>,
              <Link to="help" style={{ color: "black" }}>
                Returns &amp; Refunds
              </Link>,
              <Link to="help" style={{ color: "black" }}>
                Payment &amp; Jumia account
              </Link>,
            ]}
          />
        </div>
        <Link to="cart" className="menu-item" style={{ color: "black" }}>
          <ShoppingCartOutlinedIcon />
          Cart
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
