import React from "react";

const Menu = () => {
  return (
    <div className='flex justify-between flex-col'>
    <h3 className='text-[14px] leading-[17px] uppercase text-[#656566] mb-5 font-bold sl:text-sm' aria-label='Меню'>Меню</h3>
    <div className='flex justify-between gap-[52px]'>
        <ul className='flex flex-col gap-[10px]'>
            <li className='hover:opacity-60 w-fit' title='Расчёт стоимости' aria-label='Расчёт стоимости'><a href="/#">Расчёт стоимости</a></li>
            <li className='hover:opacity-60 w-fit' title='Услуги' aria-label='Услуги'><a href="/#">Услуги</a></li>
            <li className='hover:opacity-60 w-fit' title='Виджеты' aria-label='Виджеты'><a href="/#">Виджеты</a></li>
            <li className='hover:opacity-60 w-fit' title='Интеграции' aria-label='Интеграции'><a href="/#">Интеграции</a></li>
            <li className='hover:opacity-60 w-fit' title='Наши клиенты' aria-label='Наши клиенты'><a href="/#">Наши клиенты</a></li>
        </ul>
        <ul className='flex flex-col gap-[10px]'>
            <li className='hover:opacity-60 w-fit sl:order-2' title='Кейсы' aria-label='Кейсы'><a href="/#">Кейсы</a></li>
            <li className='hover:opacity-60 w-fit sl:hidden' title='Благодарственные письма' aria-label='Благодарственные письма'><a href="/#">Благодарственные письма</a></li>
            <li className='hover:opacity-60 w-fit sl:block hidden sl:order-1' title='Благодарность клиентов' aria-label='Благодарность клиентов'><a href="/#">Благодарность клиентов</a></li>
            <li className='hover:opacity-60 w-fit sl:order-3' title='Сертификаты' aria-label='Сертификаты'><a href="/#">Сертификаты</a></li>
            <li className='hover:opacity-60 w-fit sl:order-4' title='Блог на Youtube' aria-label='Блог на Youtube'><a href="/#">Блог на Youtube</a></li>
            <li className='hover:opacity-60 w-fit sl:order-5' title='Вопрос / Ответ' aria-label='Вопрос / Ответ'><a href="/#">Вопрос / Ответ</a></li>
        </ul> 
    </div>
</div>
  )
};

export default Menu;
