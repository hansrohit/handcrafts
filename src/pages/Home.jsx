import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../assets/img/pic1.jpg";
import pic2 from "../assets/img/pic2.jpg";
import pic3 from "../assets/img/pic3.jpg";
import pic4 from "../assets/img/pic4.jpg";
import pic5 from "../assets/img/pic5.jpg";
import pic6 from "../assets/img/pic6.jpg";
import pic7 from "../assets/img/pic7.jpeg";
import pic8 from "../assets/img/hans rohit(pic).jpg";
const Home = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="h-full w-full flex justify-center items-center bghome">
          <div className="pl-4 shadow-lg h-[70%] w-[85%] gap-4 flex flex-col justify-center items-center">
            <div className="w-full h-auto">
              <h1 className="text-4xl flex items-center justify-center font-bold font-serif text-cyan-600">
                Welcoming and Inviting!!
              </h1>
            </div>
            <div className="h-auto w-[55%] flex justify-center items-center text-lg text-justify text-gray-50">
              Discover the Art of Handmade Treasures Crafted with Love,
              Delivered with Care. Shop Quality Handcrafted Collection Today.
              “Experience the Beauty of Authentic Craftsmanship Shops. Support
              Local Artisans, Embrace Their Stories Crafted by Hands, Loved by
              Hearts.”
            </div>
            <div className="flex gap-4 w-full items-center justify-center h-[10%] mt-4">
              <div className="cursor-pointer font-semibold font-mono hover:text-black hover:bg-amber-900 text-black/55 bg-yellow-800 border-2 rounded-md text-center h-full w-[9%] flex justify-center items-center">
                Crafts
              </div>
              <div className="cursor-pointer font-semibold font-mono hover:text-black/55 hover:bg-neutral-100 bg-black/55 text-neutral-200 border-2 rounded-md text-center h-full w-[15%] flex justify-center items-center">
                Become a seller
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen w-full flex justify-center items-center">
          <div className="h-[99%] w-full gap-7 flex flex-col justify-center items-center">
            <div className=" h-[10%] w-[89%] flex justify-start items-end">
              <h1 className="text-3xl font-bold font-serif">
                Our Best Craftmens
              </h1>
            </div>
            <div className="h-[35%] w-[94%] flex justify-center gap-3 items-center rounded-md shadow-sm">
              <div className="border-2 h-[90%] w-[35%] rounded-full artesians1 flex justify-center items-end">
                <h1 className="overline text-lg font-semibold text-white">
                  Varunika
                </h1>
              </div>
              <div className="border-2 h-[90%] w-[35%] rounded-full artesians2 flex justify-center items-end">
                <h1 className="overline text-lg font-semibold text-white">
                  Sonakshi
                </h1>
              </div>
              <div className="border-2 h-[90%] w-[35%] rounded-full artesians3 flex justify-center items-end">
                <h1 className="overline text-lg font-semibold text-white">
                  Imran
                </h1>
              </div>
              <div className="border-2 h-[90%] w-[35%] rounded-full artesians4 flex justify-center items-end">
                <h1 className="overline text-lg font-semibold text-white">
                  Karthik
                </h1>
              </div>
              <div className="border-2 h-[90%] w-[35%] rounded-full artesians5 flex justify-center items-end">
                <h1 className="overline text-lg font-semibold text-white">
                  Rohit
                </h1>
              </div>
              <div className="border-2 h-[90%] w-[35%] rounded-full artesians6 flex justify-center items-end">
                <h1 className="overline text-lg font-semibold text-white">
                  Yash
                </h1>
              </div>
            </div>

            <div className=" h-[10%] w-[89%] flex justify-start items-center">
              <h1 className="text-3xl font-bold font-serif">Trending Crafts</h1>
            </div>
            <div className="h-[35%] w-[94%] flex justify-center gap-3 items-center rounded-md shadow-sm">
              <Link
                to="/products"
                className="border-2 h-[90%] w-[35%] rounded-full crafts1"
              >
                {/* <div className="border-2 h-[90%] w-[35%] rounded-full crafts1"></div> */}
              </Link>

              <Link
                to="/products"
                className="border-2 h-[90%] w-[35%] rounded-full crafts2"
              >
                {/* <div className="border-2 h-[90%] w-[35%] rounded-full crafts1"></div> */}
              </Link>

              <Link
                to="/products"
                className="border-2 h-[90%] w-[35%] rounded-full crafts3"
              >
                {/* <div className="border-2 h-[90%] w-[35%] rounded-full crafts1"></div> */}
              </Link>

              <Link
                to="/products"
                className="border-2 h-[90%] w-[35%] rounded-full crafts4"
              >
                {/* <div className="border-2 h-[90%] w-[35%] rounded-full crafts1"></div> */}
              </Link>

              <Link
                to="/products"
                className="border-2 h-[90%] w-[35%] rounded-full crafts5"
              >
                {/* <div className="border-2 h-[90%] w-[35%] rounded-full crafts1"></div> */}
              </Link>

              <Link
                to="/products"
                className="border-2 h-[90%] w-[35%] rounded-full crafts6"
              >
                {/* <div className="border-2 h-[90%] w-[35%] rounded-full crafts1"></div> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
