import CallNumber from '../Buttons/CallNumber';
import SocialMedia from '../SocialMedia/SocialMedia';

export default function Footer() {
  return (
    <footer className='flex flex-col items-end font-inter text-lg pb-5 md:justify-center md:items-start sl:px-[15px] sl:bg-[#0E1014] sl:relative sl:z-20 sl:pt-10'>
        <div className='flex justify-between mb-[33px] w-full gap-4 flex-wrap md:justify-start md:mb-[50px]'>
            <ul className='midl:mb-8'>
                <h3 className='text-[14px] leading-[17px] uppercase text-[#656566] mb-5 font-bold' aria-label='О компании'>О компании</h3>
                <li className='mb-[10px] hover:opacity-60' title='Партнёрская программа' aria-label='Партнёрская программа'><a href="/#">Партнёрская программа</a></li>
                <li className='hover:opacity-60' title='Вакансии' aria-label='Вакансии'><a href="/#">Вакансии</a></li>
            </ul>
            <div className='flex justify-between flex-col'>
                <h3 className='text-[14px] leading-[17px] uppercase text-[#656566] mb-5 font-bold' aria-label='Меню'>Меню</h3>
                <div className='flex justify-between gap-[52px]'>
                    <ul className='flex flex-col gap-[10px]'>
                        <li className='hover:opacity-60' title='Расчёт стоимости' aria-label='Расчёт стоимости'><a href="/#">Расчёт стоимости</a></li>
                        <li className='hover:opacity-60' title='Услуги' aria-label='Услуги'><a href="/#">Услуги</a></li>
                        <li className='hover:opacity-60' title='Виджеты' aria-label='Виджеты'><a href="/#">Виджеты</a></li>
                        <li className='hover:opacity-60' title='Интеграции' aria-label='Интеграции'><a href="/#">Интеграции</a></li>
                        <li className='hover:opacity-60' title='Наши клиенты' aria-label='Наши клиенты'><a href="/#">Наши клиенты</a></li>
                    </ul>
                    <ul className='flex flex-col gap-[10px]'>
                        <li className='hover:opacity-60' title='Кейсы' aria-label='Кейсы'><a href="/#">Кейсы</a></li>
                        <li className='hover:opacity-60' title='Благодарственные письма' aria-label='Благодарственные письма'><a href="/#">Благодарственные письма</a></li>
                        <li className='hover:opacity-60' title='Сертификаты' aria-label='Сертификаты'><a href="/#">Сертификаты</a></li>
                        <li className='hover:opacity-60' title='Блог на Youtube' aria-label='Блог на Youtube'><a href="/#">Блог на Youtube</a></li>
                        <li className='hover:opacity-60' title='Вопрос / Ответ' aria-label='Вопрос / Ответ'><a href="/#">Вопрос / Ответ</a></li>
                    </ul> 
                </div>
            </div>
            <div className='text-right md:text-left'>
                <h3 className='text-[14px] leading-[17px] uppercase text-[#656566] mb-5 font-bold' aria-label='Контакты'>Контакты</h3>
                <div className='flex flex-col gap-[23px] md:gap-3'>
                    <CallNumber/>
                    <ul className='flex justify-end gap-[14px] md:justify-start'>
                        <SocialMedia/>
                    </ul>
                    <h4 className='cursor-pointer' title='адресс Москва, Путевой проезд 3с1, к 902' aria-label='адресс Москва, Путевой проезд 3с1, к 902'>Москва, Путевой проезд 3с1, к 902</h4>
                </div>
            </div> 
        </div>
        <div className='flex justify-end max-w-[239px] font-montserrat font-normal text-[12px] leading-[15px] text-right md:justify-start md:text-left'>
            <p title='Политика конфиденциальности' aria-label='Политика конфиденциальности'>©WELBEX 2022. Все права защищены. <br/>
                <span className='underline'><a href="/#"> Политика конфиденциальности</a></span>
            </p>
        </div>
    </footer>
  )
}
