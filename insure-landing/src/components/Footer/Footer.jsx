import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faPinterest,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import bgfootermobile from "../../images/bgfootermobile.svg";
import bgfooterdesktop from "../../images/bgfooterdesktop.svg";
import logo from "../../images/logo.svg";

export default function Footer() {
  return (
    <div>
      <div className="bg-gray-lt-v relative content-center desktop:w-[1440px] desktop:h-[393px]">
        <img
          src={bgfootermobile}
          alt="Grey swirl lines"
          className="absolute desktop:hidden"
        />
        <img
          src={bgfooterdesktop}
          alt="Grey swirl lines"
          className="absolute hidden desktop:block desktop:top-0"
        />
        <div className="relative desktop:w-[1110px] desktop:justify-self-center">
          <img
            src={logo}
            alt="Insure logo"
            className="m-auto absolute inset-x-0 top-[85px] desktop:hidden"
          />
          <img
            src={logo}
            alt="Insure logo"
            className="absolute top-[65px] left-0 hidden desktop:block"
          />
          <div className="m-auto absolute inset-x-0 top-[140px] desktop:hidden">
            <FontAwesomeIcon
              icon={faSquareFacebook}
              className="text-gray-violet-dk mx-[8px] w-[24px] h-[24px] hover:text-black cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-gray-violet-dk mx-[8px] w-[24px] h-[24px] hover:text-black cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faPinterest}
              className="text-gray-violet-dk mx-[8px] w-[24px] h-[24px] hover:text-black cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-gray-violet-dk mx-[8px] w-[24px] h-[24px] hover:text-black cursor-pointer"
            />
          </div>
          <div className="absolute top-[65px] right-0 hidden desktop:block">
            <FontAwesomeIcon
              icon={faSquareFacebook}
              className="text-gray-violet-dk mx-[8px] w-[24px] h-[24px] hover:text-black cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-gray-violet-dk mx-[8px] w-[24px] h-[24px] hover:text-black cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faPinterest}
              className="text-gray-violet-dk mx-[8px] w-[24px] h-[24px] hover:text-black cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-gray-violet-dk mx-[8px] w-[24px] h-[24px] hover:text-black cursor-pointer"
            />
          </div>
        </div>
        <hr className="border-gray-lt w-[327px] desktop:w-[1110px] h-[1px] m-auto mt-[200px] desktop:mt-[120px] mb-[35px] desktop:mb-[45px]"></hr>
        <div className="desktop:flex desktop:justify-self-center">
          <div className="desktop:text-left desktop:w-[255px] desktop:mr-[26px]">
            <div className="text-gray-violet-dk font-bold text-[13px] tracking-widest mb-[25px] desktop:mb-[30px]">
              OUR COMPANY
            </div>
            <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[10px] hover:underline cursor-pointer">
              HOW WE WORK
            </div>
            <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[10px] hover:underline cursor-pointer">
              WHY INSURE?
            </div>
            <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[10px] hover:underline cursor-pointer">
              CHECK PRICE
            </div>
            <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[30px] hover:underline cursor-pointer">
              REVIEWS
            </div>
          </div>
          <div className="desktop:text-left desktop:w-[255px] desktop:mr-[26px]">
            <div className="text-gray-violet-dk font-bold text-[13px] tracking-widest mb-[25px] desktop:mb-[30px]">
              HELP ME
            </div>
            <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[10px] hover:underline cursor-pointer">
              FAQ
            </div>
            <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[10px] hover:underline cursor-pointer">
              TERMS OF USE
            </div>
            <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[10px] hover:underline cursor-pointer">
              PRIVACY POLICY
            </div>
            <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[30px] hover:underline cursor-pointer">
              COOKIES
            </div>
          </div>
          <div className="desktop:text-left desktop:w-[255px] desktop:mr-[26px]">
            <div className="text-gray-violet-dk font-bold text-[13px] tracking-widest mb-[25px] desktop:mb-[30px]">
              CONTACT
            </div>
            <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[10px] hover:underline cursor-pointer">
              SALES
            </div>
            <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[10px] hover:underline cursor-pointer">
              SUPPORT
            </div>
            <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[30px] hover:underline cursor-pointer">
              LIVE CHAT
            </div>
          </div>
          <div className="desktop:text-left desktop:w-[255px]">
            <div className="text-gray-violet-dk font-bold text-[13px] tracking-widest mb-[25px] desktop:mb-[30px]">
              OTHERS
            </div>
            <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[10px] hover:underline cursor-pointer">
              CAREERS
            </div>
            <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[10px] hover:underline cursor-pointer">
              PRESS
            </div>
            <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[90px] hover:underline cursor-pointer">
              LICENSES
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
