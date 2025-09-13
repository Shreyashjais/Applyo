import DescriptionCard from "./components/descriptionCard";
import Footer from "./components/footer";
import MainCard from "./components/mainCard";
import Navbar from "./components/navbar";


export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <MainCard/>
      <DescriptionCard/>
     <Footer/>
    </div>
  );
}
