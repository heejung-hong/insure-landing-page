import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/logo.svg";
import bgmobilenav from "../../images/bgmobilenav.svg";

export default function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="relative z-10">
      {/* Mobile Nav */}
      <div className="w-[100%] h-[80px] flex flex-row items-center justify-between px-6 desktop:hidden">
        <img src={logo} alt="Insure logo" className="w-[112px] h-[18px]" />
        <div
          className="content-center w-[32px] h-[32px] bg-white border-solid border-2 border-black"
          onClick={handleNav}
        >
          {nav ? (
            <FontAwesomeIcon
              icon={faXmark}
              className="text-black m-auto w-[16px] h-[16px] "
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="text-black m-auto w-[16px] h-[16px]"
            />
          )}
        </div>
      </div>
      {nav ? (
        <>
          <div className="static w-[375] h-[587px] bg-violet-dk-v pt-[40px] desktop:hidden">
            <div
              className=" static w-[327px] h-[56px] m-auto content-center font-bold text-[20px] leading-[40px] tracking-[1.36px] text-white hover:border-solid hover:border-2 hover:border-white cursor-pointer"
              onClick={handleNav}
            >
              HOW WE WORK
            </div>
            <div
              className="w-[327px] h-[56px] m-auto mt-[20px] content-center font-bold text-[20px] leading-[40px] tracking-[1.36px] text-white hover:border-solid hover:border-2 hover:border-white cursor-pointer"
              onClick={handleNav}
            >
              BLOG
            </div>
            <div
              className="w-[327px] h-[56px] m-auto mt-[20px]  content-center font-bold text-[20px] leading-[40px] tracking-[1.36px] text-white hover:border-solid hover:border-2 hover:border-white cursor-pointer"
              onClick={handleNav}
            >
              ACCOUNT
            </div>
            <div
              className="w-[327px] h-[56px] m-auto mt-[20px]  content-center font-bold text-[20px] leading-[40px] tracking-[1.36px] text-white hover:border-solid hover:border-2 hover:border-white cursor-pointer"
              onClick={handleNav}
            >
              VIEW PLANS
            </div>
            <img
              src={bgmobilenav}
              alt="wave lines"
              className="absolute bottom-0"
            />
          </div>
        </>
      ) : (
        <></>
      )}

      {/* Desktop Nav */}
      <div className="hidden desktop:block desktop:w-[1440px] h-[80px] m-auto bg-white px-[165px] content-center">
        <div className="flex justify-between items-center">
          <img src={logo} alt="Insure logo" className="w-[112px] h-[18px]" />
          <div className="flex content-center">
            <div className="content-center font-bold text-[13px] tracking-widest text-gray-violet-dk hover:text-black mr-[30px] cursor-pointer">
              HOW WE WORK
            </div>
            <div className="content-center font-bold text-[13px] tracking-widest text-gray-violet-dk hover:text-black mr-[30px] cursor-pointer">
              BLOG
            </div>
            <div className="content-center font-bold text-[13px] tracking-widest text-gray-violet-dk hover:text-black mr-[30px] cursor-pointer">
              ACCOUNT
            </div>
            <div className="w-[146px] h-[40px] content-center font-bold text-[13px] tracking-widest text-black border-solid border-2 border-black hover:text-white hover:bg-black cursor-pointer">
              VIEW PLANS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
