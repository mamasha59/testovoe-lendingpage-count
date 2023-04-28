import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainBlock from "./components/MainBlock/MainBlock";

function App() {
  return (
      <div className="max-w-[1440px] my-0 mx-auto text-[#E4E5EA] pl-[147px] pr-[150px] pt-[57px] md:px-6 sl:p-0">
        <Header/>
        <MainBlock/>
        <Footer/>
      </div>
  );
}

export default App;
