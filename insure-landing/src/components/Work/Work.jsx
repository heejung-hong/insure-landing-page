import bgweworkmobile from "../../images/bgweworkmobile.svg";

export default function Work() {
  return (
    <div className="w-[327px] h-[544px] content-center justify-self-center">
      <div className="relative w-[327px] h-[344px] bg-violet-dk">
        <img
          src={bgweworkmobile}
          alt="wave lines"
          className="absolute right-0"
        />
        <div className="absolute top-[72px] inset-x-0">
          <h1 className="text-white text-[40px] tracking-normal leading-[40px]">
            Find out more about how we work
          </h1>
          <div className="w-[146px] h-[40px] border-solid border-2 border-white content-center m-auto mt-10">
            <div className="text-white font-bold text-[13px] tracking-wider">
              HOW WE WORK
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
