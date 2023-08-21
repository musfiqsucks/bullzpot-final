import { BiSolidChevronRight } from "react-icons/bi";

const MainButton = () => {
  return (
    <a
      href="mailto:bullzpot@gmail.com"
      className="bg-tertiary py-3 rounded-md color-white px-6 flex justify-center items-center no-underline"
    >
      Get a Free Quote
      <BiSolidChevronRight className="ml-1" size={18}></BiSolidChevronRight>
    </a>
  );
};

export default MainButton;
