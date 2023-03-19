
export default function MainBlock() {
  return (
    <main className="flex justify-between mb-[124px] relative md:flex-col sl:px-[15px] sl:mb-[40px]">
        <div className="md:mb-[45px]">
            <h1 className="font-inter text-[48px] leading-[58px] max-w-[362px] mb-[30px] sl:text-[36px] sl:leading-[44px]">Зарабатывайте больше <span className="text-transparent bg-clip-text bg-text-gradient font-black sl:text-[36px] leading-[44px]"><br/> с WELBEX</span></h1>
            <p className="max-w-[265px] text-xlg font-normal font-montserrat">Развиваем и контролируем продажи за вас</p>
        </div>
        <div className="text-right pt-4 text-xlg font-inter font-medium flex flex-col items-end sl:text-left">
            <h2 className="max-w-[291px] mb-10 sl:mb-5">
                Вместе с <span className="uppercase text-transparent bg-clip-text bg-text-gradient sl:lowercase">бесплатной консультацией</span> мы дарим:
            </h2>
                <ul className="grid grid-cols-[repeat(2,minmax(101px,135px))] gap-[30px] mb-[61px] sl:text-[13px] sl:leading-4 sl:font-normal sl:gap-[6px] sl:gap-y-[14px] sl:w-full sl:grid-cols-[repeat(2,minmax(101px,145px))]">
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
        <div className="absolute bottom-0 right-[40%] w-[28px] h-[28px] bg-header-ball-gradient rounded-full blur-[2px]"></div>
    </main>
  )
}
