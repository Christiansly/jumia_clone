import React, {Fragment}from 'react'
import { Link } from "react-router-dom";
import PolymerOutlinedIcon from "@material-ui/icons/PolymerOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
function HomeMenu() {
    return (
      <Fragment>
        <Link to="">
          <PolymerOutlinedIcon style={{ fontSize: "small" }} />
          &nbsp;&nbsp;Supermarket
        </Link>
        <Link to="">
          <FavoriteBorderIcon style={{ fontSize: "small" }} />
          &nbsp;&nbsp;Health &amp; Beauty
        </Link>
        <Link to="">
          <FavoriteBorderIcon style={{ fontSize: "small" }} />
          &nbsp;&nbsp;Home &amp; Office
        </Link>
        <Link to="">
          <FavoriteBorderIcon style={{ fontSize: "small" }} />
          &nbsp;&nbsp;Phones &amp; Tablets
        </Link>
        <Link to="">
          <FavoriteBorderIcon style={{ fontSize: "small" }} />
          &nbsp;&nbsp;Computing
        </Link>
        <Link to="">
          <FavoriteBorderIcon style={{ fontSize: "small" }} />
          &nbsp;&nbsp;Electronics
        </Link>
        <Link to="">
          <FavoriteBorderIcon style={{ fontSize: "small" }} />
          &nbsp;&nbsp;Fashion
        </Link>
        <Link to="">
          <FavoriteBorderIcon style={{ fontSize: "small" }} />
          &nbsp;&nbsp;Baby Products
        </Link>
        <Link to="">
          <FavoriteBorderIcon style={{ fontSize: "small" }} />
          &nbsp;&nbsp;Baby Products
        </Link>
        <Link to="">
          <FavoriteBorderIcon style={{ fontSize: "small" }} />
          &nbsp;&nbsp;Gaming
        </Link>
        <Link to="">
          <FavoriteBorderIcon style={{ fontSize: "small" }} />
          &nbsp;&nbsp;Sporting Goods
        </Link>
        <Link to="">
          <FavoriteBorderIcon style={{ fontSize: "small" }} />
          &nbsp;&nbsp;Automobile
        </Link>
        <Link to="">
          <FavoriteBorderIcon style={{ fontSize: "small" }} />
          &nbsp;&nbsp;Other Categories
        </Link>
      </Fragment>
    );
}

export default HomeMenu
