import LesftSide from "./LestSide/LesftSide";
import RightSide from "./RightSide/RightSide";

export default function MainBlock() {
  return (
    <main className="flex justify-between pb-[124px] pt-[94px] relative md:flex-col sl:px-[15px] sl:pt-10 sl:pb-[59px] bg-cover sl:overflow-hidden">
        <LesftSide/>
        <RightSide/>
        {/* внизу декор градиент и декор шары на small screen */}
            <div className="absolute -left-[320px] w-[311px] h-[311px] bg-[#961A1A] blur-[196px] opacity-50 rounded-full z-[20]"></div>
            <div className="hidden sl:block absolute w-[211px] h-[210px] -left-[55px] bottom-0 bg-[#961A1A] opacity-50 blur-[196px]"></div>
            <div className="absolute bottom-0 right-[40%] w-[28px] h-[28px] bg-header-ball-gradient rounded-full blur-[2px] sl:left-7 sl:w-11 sl:h-11 sl:blur-sm sl:-bottom-1"></div>
            <div className="hidden sl:block w-[40px] h-[40px] bg-header-ball-purple rounded-full absolute -right-4 bottom-[40%] blur-[5px]"></div>
            <div className="hidden sl:block absolute w-[260px] h-[260px] -right-1/3 bg-[#833AB4] opacity-50 blur-[196px] bottom-0"></div>
        {/* -------------------- */}
    </main>
  )
}
