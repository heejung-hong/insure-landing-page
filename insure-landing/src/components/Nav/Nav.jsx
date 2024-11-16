import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/logo.svg";

export default function Header() {
  return (
    <div className="relative z-10">
      {/* Mobile Nav */}
      <div className="w-[100%] h-[80px] flex flex-row items-center justify-between px-6 desktop:hidden">
        <img src={logo} alt="Insure logo" className="w-[112px] h-[18px]" />
        <div className="content-center w-[32px] h-[32px] border-solid border-2 border-black">
          <FontAwesomeIcon
            icon={faBars}
            className="text-black m-auto w-[16px] h-[16px]"
          />
        </div>
        <div className="hidden content-center w-[32px] h-[32px] border-solid border-2 border-black">
          <FontAwesomeIcon
            icon={faXmark}
            className="text-black m-auto w-[16px] h-[16px] "
          />
        </div>
      </div>

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
