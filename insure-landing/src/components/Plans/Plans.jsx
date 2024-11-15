import imagemobile from "../../images/imagemobile.jpg";
import bgleftmobile from "../../images/bgleftmobile.svg";
import bgrightmobile from "../../images/bgrightmobile.svg";
import imagedesktop from "../../images/imagedesktop.jpg";
import bgleftdesktop from "../../images/bgleftdesktop.svg";
import bgrightdesktop from "../../images/bgrightdesktop.svg";

export default function Plans() {
  return (
    <div>
      <img
        src={imagemobile}
        alt="family of four"
        className="w-[375px] h-[451px] desktop:hidden"
      />
      <div className="relative -z-30 w-[375px] h-[500px] desktop:w-[1440px] desktop:h-[600px] bg-violet-dk desktop:m-auto">
        <img
          src={bgleftmobile}
          alt="wave lines"
          className="absolute -z-10 desktop:hidden"
        />
        <img
          src={bgleftdesktop}
          alt="wave lines"
          className="absolute -z-10 hidden desktop:block top-[430px]"
        />
        <div className="absolute top-[100px] inset-x-0 desktop:hidden">
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
            <div className="text-white font-bold text-[13px] tracking-widest">
              VIEW PLANS
            </div>
          </div>
        </div>
        <div className="absolute top-[100px] left-[170px] hidden desktop:block">
          <hr className="border-fuchsia w-[150px] h-[1px] mb-[50px] ml-0"></hr>
          <div className="w-[540px] h-[140px] m-auto">
            <h1 className="text-white text-[72px] tracking-tight leading-[64px] text-left">
              Humanizing <br /> your insurance.
            </h1>
          </div>
          <div className="w-[540px] h-[84px] m-auto mt-6">
            <div className="text-white text-[16px] leading-[26px] text-left">
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that's right
              for you. Ensure you and your loved ones are protected.
            </div>
          </div>
          <div className="w-[146px] h-[40px] border-solid border-2 border-white content-center mt-8">
            <div className="text-white font-bold text-[13px] tracking-widest">
              VIEW PLANS
            </div>
          </div>
        </div>
        <img
          src={imagedesktop}
          alt="family of four"
          className="absolute -z-20 w-[540px] h-[650px] hidden desktop:block top-[100px] right-[170px]"
        />
        <img
          src={bgrightmobile}
          alt="wave lines"
          className="absolute -z-10 top-[347px] right-0 desktop:hidden"
        />
        <img
          src={bgrightdesktop}
          alt="wave lines"
          className="absolute -z-10 top-[347px] desktop:-top-[80px] right-0 hidden desktop:block"
        />
      </div>
    </div>
  );
}
