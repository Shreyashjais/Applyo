"use client"
import { useState } from "react";
import DescriptionCard from "./components/descriptionCard";
import Footer from "./components/footer";
import MainCard from "./components/mainCard";
import Navbar from "./components/navbar";

export default function Home() {
  const [isMenuUp, setIsMenuUp] = useState(false);

  return (
    <div className="">
      <Navbar isMenuUp={isMenuUp} setIsMenuUp={setIsMenuUp} />
      <MainCard />
      <DescriptionCard isMenuUp={isMenuUp} />
      <Footer />
    </div>
  );
}
