import telegram from '../../sources/icons/telegram.svg';
import viber from '../../sources/icons/viber.svg';
import whatsapp from '../../sources/icons/whatsapp.svg';

export default function SocialMedia() {

  return (
    <>
        <li className='cursor-pointer hover:opacity-60'><img src={telegram} alt="соц. сеть telegram" title='соц. сеть telegram' aria-label='соц. сеть telegram'/></li>
        <li className='cursor-pointer hover:opacity-60'><img src={viber} alt="соц. сеть viber" title='соц. сеть viber' aria-label='соц. сеть viber'/></li>
        <li className='cursor-pointer hover:opacity-60'><img src={whatsapp} alt="соц. сеть whatsapp" title='соц. сеть whatsapp' aria-label='соц. сеть whatsapp'/></li>
    </>
  )
}
