import React from "react";
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
      <div className="h-screen w-full flex justify-center items-center">
        <div className="h-full w-full flex justify-center items-center bghome">
          <div className="pl-4 shadow-lg h-[70%] w-[85%] gap-4 flex flex-col justify-center items-start">
            <div className="w-full h-auto">
              <h1 className="text-4xl font-bold font-serif text-black">
                Welcoming and Inviting!!
              </h1>
            </div>
            <div className="h-auto w-[54%] text-lg text-justify text-neutral-50">
              Discover the Art of Handmade Treasures Crafted with Love,
              Delivered with Care. Shop Quality Handcrafted Collection Today.
              “Experience the Beauty of Authentic Craftsmanship Shops. Support
              Local Artisans, Embrace Their Stories Crafted by Hands, Loved by
              Hearts.”
            </div>
            <div className="flex gap-4 w-full h-[10%] mt-4">
              <div className="cursor-pointer font-semibold font-mono hover:text-black hover:bg-amber-900 text-black/55 bg-yellow-800 border-2 rounded-md text-center h-full w-[9%] flex justify-center items-center">
                Crafts
              </div>
              <div className="cursor-pointer font-semibold font-mono hover:text-black/55 hover:bg-neutral-100 bg-black/55 text-neutral-200 border-2 rounded-md text-center h-full w-[15%] flex justify-center items-center">
                Become a seller
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
