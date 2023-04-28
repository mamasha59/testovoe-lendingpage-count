import Contacts from './Contacts/Contacts';
import Menu from './Menu/Menu';

export default function Footer() {
  return (
    <footer className='flex flex-col items-end font-inter text-lg pb-5 md:justify-center md:items-start sl:px-[15px] sl:text-[14px] sl:leading-[17px] sl:relative sl:z-20 sl:pt-10'>
        <div className='flex justify-between mb-[33px] w-full gap-4 flex-wrap md:justify-start md:mb-[50px]'>
            <ul className='midl:mb-8'>
                <h3 className='text-[14px] leading-[17px] uppercase text-[#656566] mb-5 font-bold sl:text-sm' aria-label='О компании'>О компании</h3>
                <li className='mb-[10px] hover:opacity-60' title='Партнёрская программа' aria-label='Партнёрская программа'><a href="/#">Партнёрская программа</a></li>
                <li className='hover:opacity-60' title='Вакансии' aria-label='Вакансии'><a href="/#">Вакансии</a></li>
            </ul>
            <Menu/>
            <Contacts/>
        </div>
        <div className='flex justify-end max-w-[239px] font-montserrat font-normal text-[12px] leading-[15px] text-right md:justify-start md:text-left'>
            <p title='Политика конфиденциальности' aria-label='Политика конфиденциальности'>©WELBEX 2022. Все права защищены. <br/>
                <span className='underline'><a href="/#"> Политика конфиденциальности</a></span>
            </p>
        </div>
    </footer>
  )
}
