
export default function MainBlock() {
  return (
    <main className="flex justify-between pb-[124px] pt-[94px] relative md:flex-col sl:px-[15px] sl:pt-10 sl:pb-[59px] bg-noise bg-cover sl:overflow-hidden">
        <div className="md:mb-[35px] z-20">
            <h1 className="font-inter text-[48px] leading-[58px] max-w-[362px] mb-[25px] sl:text-[36px] sl:leading-[44px]">Зарабатывайте больше <span className="text-transparent bg-clip-text bg-text-gradient font-black sl:text-[36px] leading-[44px]"><br/>с WELBEX</span></h1>
            <p className="max-w-[265px] text-xlg font-normal font-montserrat">Развиваем и контролируем продажи за вас</p>
        </div>
        <div className="text-right pt-4 text-xlg font-inter font-medium flex flex-col items-end sl:text-left sl:items-start z-20">
            <h2 className="max-w-[291px] mb-10 sl:mb-5">
                Вместе с <span className="uppercase text-transparent bg-clip-text font-bold bg-text-gradient sl:lowercase">бесплатной консультацией</span> мы дарим:
            </h2>
                <ul className="grid grid-cols-[repeat(2,minmax(101px,135px))] gap-[30px] mb-[61px] sl:text-[13px] sl:leading-4 sl:font-normal sl:gap-[6px] sl:gap-y-[14px] sl:w-full sl:m-0 sl:grid-cols-[repeat(2,minmax(101px,145px))]">
                    <li className="flex flex-col sl:order-2">
                        <h3 className="hidden font-inter uppercase tracking-wider sl:font-montserrat sl:flex sl:items-center">
                        <span className="hidden sl:block w-[10px] bg-text-gradient h-[1px] mr-[5px]"></span> 30 виджетов</h3>
                        <h3 className="font-inter uppercase tracking-wider sl:font-montserrat sl:hidden">Виджеты</h3>
                        <p className="font-montserrat font-normal text-[16px] leading-[20px] mt-[6px] sl:hidden">30 готовых решений</p>
                    </li>
                    <li className="flex flex-col sl:order-3"> 
                        <h3 className="font-inter uppercase tracking-wider sl:font-montserrat flex items-center">
                        <span className="hidden sl:block w-[10px] bg-text-gradient h-[1px] mr-[5px]"></span>Dashboard</h3>
                        <p className="font-montserrat font-normal text-[16px] leading-[20px] mt-[6px] sl:hidden">с показателями вашего бизнеса</p>
                    </li>
                    <li className="flex flex-col sl:order-1"> 
                        <h3 className="font-inter uppercase tracking-wider sl:font-montserrat flex items-center">
                            <span className="hidden sl:block w-[10px] bg-text-gradient h-[1px] mr-[5px]"></span> Skype Аудит</h3>
                        <p className="font-montserrat font-normal text-[16px] leading-[20px] mt-[6px] whitespace-nowrap sl:hidden">отдела продаж<br/>и CRM системы</p>
                    </li>
                    <li className="flex flex-col sl:order-4">
                        <h3 className="hidden font-inter uppercase tracking-wider sl:font-montserrat sl:flex sl:items-center">
                        <span className="hidden sl:block w-[10px] bg-text-gradient h-[1px] mr-[5px]"></span>Месяц аmoCRM</h3>
                        <h3 className="font-inter uppercase tracking-wider sl:font-montserrat sl:hidden">35 дней</h3>
                        <p className="font-montserrat font-normal text-[16px] leading-[20px] mt-[6px] sl:hidden">использования CRM</p>
                    </li>
                </ul>
                <button title="Получить консультацию" aria-label="Получить консультацию" className="bg-[#4077F3] font-inter px-[34px] py-[21px] text-[16px] leading-[20px] font-medium hover:opacity-75 sl:hidden">Получить консультацию</button>
        </div>
        <div className="absolute -left-[320px] w-[311px] h-[311px] bg-[#961A1A] blur-[196px] opacity-50 rounded-full z-[20]"></div>
        <div className="hidden sl:block absolute w-[211px] h-[210px] -left-[55px] bottom-0 bg-[#961A1A] opacity-50 blur-[196px]"></div>
        <div className="absolute bottom-0 right-[40%] w-[28px] h-[28px] bg-header-ball-gradient rounded-full blur-[2px] sl:left-7 sl:w-11 sl:h-11 sl:blur-sm sl:-bottom-1"></div>
        <div className="hidden sl:block w-[40px] h-[40px] bg-header-ball-purple rounded-full absolute -right-4 bottom-[40%] blur-[5px]"></div>
        <div className="hidden sl:block absolute w-[260px] h-[260px] -right-1/3 bg-[#833AB4] opacity-50 blur-[196px] bottom-0"></div>
    </main>
  )
}
