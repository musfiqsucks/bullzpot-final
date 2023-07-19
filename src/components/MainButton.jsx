import { BiSolidChevronRight } from "react-icons/bi";

const MainButton = () => {
  return (
    <button className="bg-orange py-3 rounded-md color-white px-6 flex justify-center items-center">
      Get a Free Quote
      <BiSolidChevronRight className="ml-1 " size={18}></BiSolidChevronRight>
    </button>
  );
};

export default MainButton;
