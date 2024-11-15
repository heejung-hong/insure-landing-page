import bgweworkmobile from "../../images/bgweworkmobile.svg";
import bgweworkdesktop from "../../images/bgweworkdesktop.svg";

export default function Work() {
  return (
    <div className="w-[327px] h-[544px] desktop:w-[100%] content-center justify-self-center">
      <div className="relative w-[327px] h-[344px] desktop:w-[1110px] desktop:h-[250px] desktop:m-auto bg-violet-dk">
        <img
          src={bgweworkmobile}
          alt="wave lines"
          className="absolute right-0 desktop:hidden"
        />
        <img
          src={bgweworkdesktop}
          alt="wave lines"
          className="absolute right-0 hidden desktop:block"
        />
        <div className="absolute top-[72px] inset-x-0 desktop:flex">
          <h1 className="text-white text-[40px] tracking-normal leading-[40px] desktop:hidden">
            Find out more about how we work
          </h1>
          <h1 className="text-white text-[56px] tracking-wider leading-[56px] hidden desktop:block desktop:w-[475px] desktop:h-[112px] desktop:text-left desktop:ml-[80px]">
            Find out more <br /> about how we work
          </h1>
          <div className="w-[146px] h-[40px] desktop:w-[160px] border-solid border-2 border-white content-center m-auto mt-10 desktop:mt-8 desktop:mr-[80px]">
            <div className="text-white font-bold text-[13px] tracking-widest">
              HOW WE WORK
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
