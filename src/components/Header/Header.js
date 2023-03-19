import LogoBrend from '../../sources/imgs/LogoBrend.svg';
import CallNumber from '../Buttons/CallNumber';
import SocialMedia from '../SocialMedia/SocialMedia';

export default function Header() {
  return (
    <header className="flex items-center mb-[90px] justify-between relative md:justify-center sl:mb-10">
        <div className='flex items-center sl:w-full sl:relative sl:z-40 z-20'>
            <div className='mr-[52px] lg:hidden'>
                <img aria-label='лого бренда WELBEX' title='лого бренда WELBEX' className='cursor-pointer mb-[10px] max-w-[140px] h-auto' src={LogoBrend} alt="логотип WELBEX"/>
                <h2 className="max-w-[140px] text-[10px] leading-3 font-montserrat">крупный интегратор CRM в Росcии и ещё 8 странах</h2>
            </div>
            <nav className='relative px-2 sl:p-0 sl:w-full'>
                <ul className='flex justify-between font-inter text-lg gap-[30px] midl:gap-4 midl:text-sm sl:px-4 sl:py-5 sl:w-full sl:uppercase sl:bg-[#0E1014]'>
                    <li aria-label='Услуги' title='Услуги' className='hover:opacity-60 transition-opacity'><a href='/#'>Услуги</a></li>
                    <li aria-label='Виджеты' title='Виджеты' className='hover:opacity-60 transition-opacity'><a href='/#'>Виджеты</a></li>
                    <li aria-label='Интеграции' title='Интеграции' className='hover:opacity-60 transition-opacity'><a href='/#'>Интеграции</a></li>
                    <li aria-label='Кейсы' title='Кейсы' className='hover:opacity-60 transition-opacity'><a href='/#'>Кейсы</a></li>
                    <li aria-label='Сертификаты' title='Сертификаты' className='hover:opacity-60 transition-opacity sl:hidden'><a href='/#'>Сертификаты</a></li>
                </ul>
                <div className='w-[83px] h-[83px] absolute right-[45%] bg-header-ball-gradient rounded-full shadow-3xl sl:hidden'></div>
            </nav>
        </div>
   
        <div className='flex items-center lg:hidden'>
            <CallNumber/>
            <ul className='ml-[48px] flex justify-end gap-[34px]'>
                <SocialMedia/>
            </ul>
        </div>
        <div className='absolute left-[51%] -top-[154px] w-[259px] h-[259px] bg-[#833AB4] blur-[196px] opacity-50 rounded-full
            midl:left-[20%] sl:-left-[55px] sl:top-60 sl:opacity-50 sl:w-[210px] sl:h-[210px]'></div>
    </header>
  )
}
