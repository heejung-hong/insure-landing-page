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
    <div className="bg-gray-lt-v relative -z-20 content-center desktop:w-[100vw] desktop:h-[393px]">
      <img
        src={bgfootermobile}
        alt="Grey swirl lines"
        className="absolute -z-10 desktop:hidden"
      />
      <img
        src={bgfooterdesktop}
        alt="Grey swirl lines"
        className="absolute -z-10 hidden desktop:block desktop:top-0"
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
        <div className="absolute top-[65px] right-0 hidden desktop:block">
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
      <hr className="border-gray-lt w-[327px] desktop:w-[1110px] h-[1px] m-auto mt-[200px] desktop:mt-[120px] mb-[35px]"></hr>
      <div className="desktop:flex desktop:justify-self-center">
        <div className="desktop:text-left desktop:w-[255px] desktop:mr-[26px]">
          <div className="text-gray-violet-dk font-bold text-[13px] tracking-widest mb-[25px]">
            OUR COMPANY
          </div>
          <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[10px]">
            HOW WE WORK
          </div>
          <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[10px]">
            WHY INSURE?
          </div>
          <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[10px]">
            CHECK PRICE
          </div>
          <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[30px]">
            REVIEWS
          </div>
        </div>
        <div className="desktop:text-left desktop:w-[255px] desktop:mr-[26px]">
          <div className="text-gray-violet-dk font-bold text-[13px] tracking-widest mb-[25px]">
            HELP ME
          </div>
          <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[10px]">
            FAQ
          </div>
          <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[10px]">
            TERMS OF USE
          </div>
          <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[10px]">
            PRIVACY POLICY
          </div>
          <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[30px]">
            COOKIES
          </div>
        </div>
        <div className="desktop:text-left desktop:w-[255px] desktop:mr-[26px]">
          <div className="text-gray-violet-dk font-bold text-[13px] tracking-widest mb-[25px]">
            CONTACT
          </div>
          <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[10px]">
            SALES
          </div>
          <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[10px]">
            SUPPORT
          </div>
          <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[30px]">
            LIVE CHAT
          </div>
        </div>
        <div className="desktop:text-left desktop:w-[255px]">
          <div className="text-gray-violet-dk font-bold text-[13px] tracking-widest mb-[25px]">
            OTHERS
          </div>
          <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[10px]">
            CAREERS
          </div>
          <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[10px]">
            PRESS
          </div>
          <div className="text-violet-dk font-bold text-[13px] tracking-widest mb-[90px]">
            LICENSES
          </div>
        </div>
      </div>
    </div>
  );
}
