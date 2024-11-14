import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faPinterest,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import bgfootermobile from "../../images/bgfootermobile.svg";
import logo from "../../images/logo.svg";

export default function Footer() {
  return (
    <div className="bg-gray-lt-v relative -z-20 content-center">
      <div className="relative ">
        <img
          src={bgfootermobile}
          alt="Grey swirl lines"
          className="absolute -z-10 "
        />
        <img
          src={logo}
          alt="Insure logo"
          className="m-auto absolute inset-x-0 top-[85px]"
        />
        <div className="m-auto absolute inset-x-0 top-[140px]">
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className="text-gray-violet-dk mx-[8px] w-[24px] h-[24px]"
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            className="text-gray-violet-dk mx-[8px] w-[24px] h-[24px]"
          />
          <FontAwesomeIcon
            icon={faPinterest}
            className="text-gray-violet-dk mx-[8px] w-[24px] h-[24px]"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-gray-violet-dk mx-[8px] w-[24px] h-[24px]"
          />
        </div>
      </div>
      <hr className="border-gray-lt w-[327px] h-[1px] m-auto mt-[200px] mb-[35px]"></hr>
      <div className="">
        <div className="text-gray-violet-dk font-bold text-[13px] tracking-wider mb-[25px]">
          OUR COMPANY
        </div>
        <div className="text-violet-dk font-bold text-[13px] tracking-wider mb-[10px]">
          HOW WE WORK
        </div>
        <div className="text-violet-dk font-bold text-[13px] tracking-wider mb-[10px]">
          WHY INSURE?
        </div>
        <div className="text-violet-dk font-bold text-[13px] tracking-wider mb-[10px]">
          CHECK PRICE
        </div>
        <div className="text-violet-dk font-bold text-[13px] tracking-wider mb-[30px]">
          REVIEWS
        </div>
      </div>
      <div className="">
        <div className="text-gray-violet-dk font-bold text-[13px] tracking-wider mb-[25px]">
          HELP ME
        </div>
        <div className="text-violet-dk font-bold text-[13px] tracking-wider mb-[10px]">
          FAQ
        </div>
        <div className="text-violet-dk font-bold text-[13px] tracking-wider mb-[10px]">
          TERMS OF USE
        </div>
        <div className="text-violet-dk font-bold text-[13px] tracking-wider mb-[10px]">
          PRIVACY POLICY
        </div>
        <div className="text-violet-dk font-bold text-[13px] tracking-wider mb-[30px]">
          COOKIES
        </div>
      </div>
      <div>
        <div className="text-gray-violet-dk font-bold text-[13px] tracking-wider mb-[25px]">
          CONTACT
        </div>
        <div className="text-violet-dk font-bold text-[13px] tracking-wider mb-[10px]">
          SALES
        </div>
        <div className="text-violet-dk font-bold text-[13px] tracking-wider mb-[10px]">
          SUPPORT
        </div>
        <div className="text-violet-dk font-bold text-[13px] tracking-wider mb-[30px]">
          LIVE CHAT
        </div>
      </div>
      <div>
        <div className="text-gray-violet-dk font-bold text-[13px] tracking-wider mb-[25px]">
          OTHERS
        </div>
        <div className="text-violet-dk font-bold text-[13px] tracking-wider mb-[10px]">
          CAREERS
        </div>
        <div className="text-violet-dk font-bold text-[13px] tracking-wider mb-[10px]">
          PRESS
        </div>
        <div className="text-violet-dk font-bold text-[13px] tracking-wider mb-[90px]">
          LICENSES
        </div>
      </div>
    </div>
  );
}
