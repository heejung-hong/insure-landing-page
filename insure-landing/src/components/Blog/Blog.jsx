import iconsnappy from "../../images/iconsnappyprocess.svg";
import iconaffordable from "../../images/iconaffordableprices.svg";
import iconpeople from "../../images/iconpeoplefirst.svg";

export default function Blog() {
  return (
    <div className="justify-items-center desktop:justify-items-start desktop:m-auto desktop:w-[1110px] desktop:h-[474px]">
      <hr className="border-fuchsia w-[150px] h-[1px] m-auto mt-[140px] desktop:mt-[300px] desktop:ml-0"></hr>
      <h1 className="text-black text-[48px] desktop:text-[72px] tracking-narrow desktop:tracking-tight leading-[48px] desktop:leading-[64px] mt-[40px] desktop:mt-[60px]">
        We're different
      </h1>
      <div className="justify-items-center desktop:flex">
        <div className="justify-items-center desktop:justify-items-start desktop:text-left desktop:w-[350px] mt-[70px] desktop:mr-[30px]">
          <img src={iconsnappy} alt="lightening bolt icon" />
          <h1 className="w-[327px] h-[38px] text-black text-[28px] tracking-wide mt-[30px]">
            Snappy Process
          </h1>
          <div className="w-[327px]  desktop:w-[350px] h-[78px] text-gray-violet-dk text-[16px] leading-[26px] mt-[20px]">
            Our application process can be completed in minutes, not hours.
            Don't get stuck filling in tedious forms.
          </div>
        </div>
        <div className="justify-items-center desktop:justify-items-start desktop:text-left desktop:w-[350px] mt-[70px] desktop:mr-[30px]">
          <img src={iconaffordable} alt="dollar sign icon" />
          <h1 className="w-[327px] h-[38px] text-black text-[28px] tracking-wide mt-[30px]">
            Affordable Prices
          </h1>
          <div className="w-[327px]  desktop:w-[350px] h-[78px] text-gray-violet-dk text-[16px] leading-[26px] mt-[20px]">
            We don’t want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </div>
        </div>
        <div className="justify-items-center desktop:justify-items-start desktop:text-left desktop:w-[350px] mt-[70px]">
          <img src={iconpeople} alt="people icon" />
          <h1 className="w-[327px] h-[38px] text-black text-[28px] tracking-wide mt-[30px]">
            People First
          </h1>
          <div className="w-[327px]  desktop:w-[350px] h-[78px] text-gray-violet-dk text-[16px] leading-[26px] mt-[20px] mb-[20px]">
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it.
          </div>
        </div>
      </div>
    </div>
  );
}
