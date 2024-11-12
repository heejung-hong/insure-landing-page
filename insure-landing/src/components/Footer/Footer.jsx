import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faPinterest,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faXmark,
  faUser,
  faBoltLightning,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div>
      <FontAwesomeIcon icon={faBoltLightning} />
      <FontAwesomeIcon icon={faDollarSign} />
      <FontAwesomeIcon icon={faUser} />
      <FontAwesomeIcon icon={faBars} />
      <FontAwesomeIcon icon={faXmark} />
      <FontAwesomeIcon icon={faSquareFacebook} />
      <FontAwesomeIcon icon={faXTwitter} />
      <FontAwesomeIcon icon={faPinterest} />
      <FontAwesomeIcon icon={faInstagram} />
    </div>
  );
}
