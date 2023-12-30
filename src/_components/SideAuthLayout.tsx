interface SideAuthLayout {
  heading: string;
  text: string;
  buttonText: string;
  uText: string;
  link:string,
}
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const SideAuthLayout = ({
  heading,
  text,
  buttonText,
  uText,
  link,
}: SideAuthLayout) => {
  return (
    <div className="hidden md:flex h-screen w-[30%] relative bg-[#29AB87] cursor-pointer flex-col items-center justify-center text-white gap-y-10">
      <h1 className="md:text-[40px] xl:text-[70px] font-bold whitespace-nowrap">
        {heading}
      </h1>
      <p className="text-[16px] my-7 w-[60%] ">{text}</p>
      <p className="text-sm text-gray-300 absolute mt-[13rem] ">{uText}</p>
      <Link  to={link}>
      <Button className="bg-transparent border border-white px-[90px] py-5 rounded-full hover:bg-white hover:text-[#29AB87] transition">
        {buttonText}
      </Button>
      </Link>
    </div>
  );
};

export default SideAuthLayout;
