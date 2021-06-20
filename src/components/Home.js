import React from "react";
import "./Home.css";
import DemoCarousel from "./Carousal";
import returns from "./images/returns-refunds.png";
import sell from "./images/sell-on-jumia.png";
import help from "./images/help-centerv4.png";
import bsb from "./images/BSB-Jumia-Plus-.gif";
import HomeMenu from "./HomeMenu";
import iconRed from "./images/Icon-red.png";
import jumiaFood from "./images/jumia-food-new.png";
import jumiaGlobal from "./images/JumiaGlobal.png";
import holiday from "./images/holiday-sale.jpg";
import { Link } from "react-router-dom";
import Product from "./Product";

function ProductShowCase({ items, title, backgroundColor }) {
  return (
    <div className="showcase">
      <div className="show__title" style={{ backgroundColor }}>
        <p>{title}</p>
        <div>SEE ALL ></div>
      </div>
      <div className="show__product">
        {items.map((item) => (
          <Product {...item} />
        ))}
      </div>
    </div>
  );
}

function Advertisement() {
  return (
    <div className="advert">
      <div className="advert__img">
        <img src="https://ng.jumia.is/cms/Homepage/2020/W49/591C0E22-940C-4B26-80E5-568D1A71B299.jpeg" alt=""/>
      </div>
      <div className="advert__img">
        <img src="https://ng.jumia.is/cms/Homepage/2020/W49/BA7D8BC9-3EFE-45D5-81E8-2562D628D875.jpeg" alt=""/>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="home">
      <div className="home_first">
        <div className="home__menu shadow-sm">
          <HomeMenu />
        </div>
        <div className="carousel shadow-sm">
          <DemoCarousel />
        </div>
        <div className="last">
          <div className="last_first shadow-sm">
            <div>
              <img src={help} alt="" />
              <p>
                HELP CENTER <br />
                Guide to Customer Care
              </p>
            </div>
            <div>
              <img src={returns} alt="" />
              <p>
                EASY RETURN <br />
                Quick Refund
              </p>
            </div>
            <div>
              <img src={sell} alt="" />
              <p>
                SELL ON JUMIA <br />
                Millions of Customers
              </p>
            </div>
          </div>
          <div className="last_last">
            <img src={bsb} alt="" />
          </div>
        </div>
      </div>
      <div
        className="home_second"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link className="shadow-sm">
          <img src={holiday} alt="" /> Holiday Sale
        </Link>
        <Link className="shadow-sm">
          <img src={jumiaFood} alt="" /> Jumia Food
        </Link>
        <Link className="shadow-sm">
          <img src={iconRed} alt="" /> Official Stores
        </Link>
        <Link className="shadow-sm">
          <img src={jumiaGlobal} alt="" /> Jumia Global
        </Link>
      </div>
      <div className="home_third shadow-sm">
        <p>Recommended for you</p>
        <div>
          <Product
            title="Slippers"
            img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/748606/1.jpg?7469"
            price="N3,000"
            fakePrice="N20,000"
          />
          <Product
            title="2020 Men's Fashion Ins Sandals Casual Beach Slippers"
            price="₦ 3,100 - ₦ 3,800"
            img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/891975/1.jpg?1477"
            fakePrice="N20,000"
          />
          <Product
            title="Mens Half Shoes Hot Ins Fashion Sandals"
            img="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/809193/1.jpg?1679"
            price="₦ 2,800 - ₦ 4,500"
            fakePrice="N20,000"
          />
          <Product
            title="2020 Women's Trend Slippers Personality Flat Sandals-black"
            img="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/78/895485/1.jpg?0122"
            price="₦ 3,052"
            fakePrice="₦ 5,392"
          />
          <Product
            title="2020 Women Trend Printed T-shirt Trousers Sports Casual Suit"
            img="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/649756/1.jpg?5023"
            price="₦ 3,000 - ₦ 4,500"
            fakePrice="₦ 17,000"
          />
          <Product
            title="Men's Flat Indoor Massage Slippers Men Home Non-slip Massage Slippers Zapatos Hombre Beach Flip Flops Men's Slides"
            img="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/471464/1.jpg?9637"
            price="₦ 2,498"
            fakePrice="₦ 5,498"
          />
        </div>
      </div>
      <ProductShowCase
        title="Deals of the Day | From ₦1,000"
        backgroundColor="red"
        items={[
          {
            title: "joijs",
            img:
              "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/471464/1.jpg?9637",
            price: "₦ 2,498",
            fakePrice: "₦ 5,498",
          },
          {
            title:"Men's Flat Indoor Massage Slippers Men Home Non-slip Massage Slippers Zapatos Hombre Beach Flip Flops Men's Slides",
            img:"https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/471464/1.jpg?9637",
            price:"₦ 2,498",
            fakePrice:"₦ 5,498",
          },
          {
            title:"2020 Women Trend Printed T-shirt Trousers Sports Casual Suit",
            img:"https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/649756/1.jpg?5023",
            price:"₦ 3,000 - ₦ 4,500",
            fakePrice:"₦ 17,000",
          },
          {
            title:"Slippers",
            img:"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/748606/1.jpg?7469",
            price:"N3,000",
            fakePrice:"N20,000",
          },
          {
            title:"2020 Men's Fashion Ins Sandals Casual Beach Slippers",
            price:"₦ 3,100 - ₦ 3,800",
            img:"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/891975/1.jpg?1477",
            fakePrice:"N20,000",
          },
          {
            title:"Mens Half Shoes Hot Ins Fashion Sandals",
            img:"https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/809193/1.jpg?1679",
            price:"₦ 2,800 - ₦ 4,500",
            fakePrice:"N20,000",
          }
        ]}
      />
      <Advertisement/>
    </div>
  );
}

export default Home;
