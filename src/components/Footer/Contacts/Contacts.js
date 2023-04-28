import CallNumber from '../../Buttons/CallNumber';
import SocialMedia from '../../SocialMedia/SocialMedia';

const Contacts = () => {
  return (
    <div className='text-right md:text-left sl:mt-[30px]'>
      <h3 className='text-[14px] leading-[17px] uppercase text-[#656566] mb-5 font-bold sl:text-sm' aria-label='Контакты'>Контакты</h3>
      <div className='flex flex-col gap-[23px] md:gap-3'>
          <CallNumber/>
          <ul className='flex justify-end gap-[14px] md:justify-start'>
              <SocialMedia/>
          </ul>
          <h4 className='cursor-pointer' title='адресс Москва, Путевой проезд 3с1, к 902' aria-label='адресс Москва, Путевой проезд 3с1, к 902'>Москва, Путевой проезд 3с1, к 902</h4>
      </div>
    </div> 
  )
};

export default Contacts;
