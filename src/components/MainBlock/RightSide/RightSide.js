
const RightSide = () => {
  return (
    <div className="text-right pt-4 text-xlg font-inter font-medium flex flex-col items-end sl:text-left sl:items-start z-20">
    <h2 className="max-w-[291px] mb-10 sl:mb-5 sl:lowercase tracking-normal">
        Вместе с <span className="text-transparent font-bold uppercase bg-clip-text bg-text-gradient-right tracking-normal">бесплатной</span> <span className='text-transparent font-bold bg-clip-text bg-text-gradient uppercase'>консультацией</span>  мы дарим:
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
        <button title="Получить консультацию" aria-label="Получить консультацию" className="bg-[#4077F3] font-inter px-[34px] py-[21px] text-[16px] leading-[20px] font-medium hover:opacity-75 sl:hidden">
            Получить консультацию
        </button>
    </div>
  )
};

export default RightSide;
