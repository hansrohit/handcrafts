import React from "react";
import { ShoppingCart } from "lucide-react";
import { UserRound } from "lucide-react";
import { PackageSearch } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="sticky nav top-0 h-[4rem] rounded-bl-sm rounded-br-sm shadow-md w-full flex justify-center items-center">
        <div className="h-full w-[99%] md:w-[96%] flex justify-between items-start">
          <div className="h-full w-auto md:w-auto flex justify-center items-center">
            <h1 className="text-xl font-semibold font-serif hover:text-black text-slate-50">
              <Link to="/"> Crafty Creations </Link>
            </h1>
          </div>
          <div className="h-full w-auto md:w-auto md:gap-5 flex justify-center items-center gap-2">
            <div className="h-full w-auto flex items-center">
              <form class="form relative">
                <button class="absolute left-2 -translate-y-1/2 top-1/2 p-1 flex justify-center items-center">
                  <svg
                    width="15"
                    height="10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-labelledby="search"
                    class="w-5 h-5 text-gray-700"
                  >
                    <path
                      d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                      stroke="currentColor"
                      stroke-width="1.333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <input
                  className="input h-8 w-48 bg-gray-100 flex rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
                  placeholder="Search..."
                  required=""
                  type="text"
                />
                <button
                  type="reset"
                  class="absolute right-3 -translate-y-1/2 top-1/2 p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
            <div className="h-full w-auto flex gap-1 justify-center items-center text-sm cursor-pointer hover:border-2 hover:border-t-0 hover:border-r-0 hover:border-l-0 hover:border-b-black hover:text-slate-50">
              <Link
                to="/products"
                className="h-full w-auto flex gap-1 justify-center items-center "
              >
                <PackageSearch size={20} />
                PRODUCTS
              </Link>
            </div>
            <div className="h-full w-auto flex items-center hover:border-2 hover:border-t-0 hover:border-r-0 hover:border-l-0 hover:border-b-black hover:text-slate-50">
              <button
                type="button"
                className="h-full w-auto flex gap-1 items-center text-sm"
              >
                <Link
                  to="/carts"
                  className="h-full flex justify-center items-center gap-1"
                >
                  <div>
                    <ShoppingCart size={24} />
                  </div>
                  CART
                </Link>
              </button>
            </div>
            <div className="h-full w-auto flex items-center">
              <button
                type="button"
                className="h-full w-auto flex items-center justify-center gap-1 text-sm hover:border-2 hover:border-t-0 hover:border-r-0 hover:border-l-0 hover:border-b-black hover:text-slate-50"
              >
                <Link
                  to="/login"
                  className="flex justify-center items-center gap-1"
                >
                  <UserRound size={20} />
                  ACCOUNT
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
