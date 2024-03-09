import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomApp = () => {
  return (
    <>
      <IconBar />
    </>
  );
};

export default CustomApp;

const IconBar = () => {
  return (
    <>
      <div className="flex space-x-4 bg-[purple] text-white clear-both">
        <a href="#" className="text-blue-500 hover:text-blue-700">
          <FontAwesomeIcon icon={faTwitter} className="w-[20px] text-[white]" />
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          <FontAwesomeIcon icon={faFacebook} className="w-[20px] text-[white]" />
        </a>
        <a href="#" className="text-purple-500 hover:text-purple-700">
          <FontAwesomeIcon icon={faInstagram} className="w-[20px] text-[white]" />
        </a>
      </div>
    </>
  );
};
