import imagemobile from "../../images/imagemobile.jpg";
import bgleftmobile from "../../images/bgleftmobile.svg";
import bgrightmobile from "../../images/bgrightmobile.svg";

export default function Plans() {
  return (
    <div className="">
      <img
        src={imagemobile}
        alt="family of four"
        className="w-[375px] h-[451px]"
      />
      <div className="relative -z-20 w-[375px] h-[500px] bg-violet-dk">
        <img src={bgleftmobile} alt="wave lines" className="absolute -z-10" />
        <div className="absolute top-[100px] inset-x-0">
          <div className="w-[327px] h-[96px] m-auto">
            <h1 className="text-white text-[48px] tracking-narrow leading-[48px]">
              Humanizing your insurance.
            </h1>
          </div>
          <div className="w-[327px] h-[130px] m-auto mt-6">
            <div className="text-white text-[16px] leading-[26px]">
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that's right
              for you. Ensure you and your loved ones are protected.
            </div>
          </div>
          <div className="w-[146px] h-[40px] border-solid border-2 border-white content-center m-auto mt-8">
            <div className="text-white font-bold text-[13px] tracking-wider">
              VIEW PLANS
            </div>
          </div>
        </div>
        <img
          src={bgrightmobile}
          alt="wave lines"
          className="absolute -z-10 top-[347px] right-0"
        />
      </div>
    </div>
  );
}
