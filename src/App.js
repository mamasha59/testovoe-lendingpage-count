import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainBlock from "./components/MainBlock/MainBlock";
import purpleBall from './sources/imgs/purpleBall.svg';

function App() {
  return (
      <div className="max-w-[1400px] my-0 mx-auto text-[#E4E5EA] px-[150px] pt-[57px] md:px-6 sl:p-0">
        <div className='absolute -top-[2px] left-[60%]'><img src={purpleBall} alt="декор"/></div>
        <Header />
        <MainBlock/>
        <Footer/>
      </div>
  );
}

export default App;
