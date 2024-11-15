import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/logo.svg";

export default function Header() {
  return (
    <div className="w-[100%] desktop:w-[100%] h-[80px] flex flex-row items-center justify-between px-6">
      <img src={logo} alt="Insure logo" className="w-[112px] h-[18px]" />
      <div className="content-center w-[32px] h-[32px] border-solid border-2 border-black desktop:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="text-black m-auto w-[16px] h-[16px]"
        />
      </div>
      <div className="content-center w-[32px] h-[32px] border-solid border-2 border-black desktop:hidden">
        <FontAwesomeIcon
          icon={faXmark}
          className="text-black m-auto w-[16px] h-[16px]"
        />
      </div>
    </div>
  );
}
