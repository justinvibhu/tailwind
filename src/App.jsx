import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/banner";
import CardList from "./components/cards";
import Carousel from "./components/carsoual";
import About from "./components/about";
import ServicesPage from "./components/Services";
import Footer from "./components/footer";
import Satisfication from "./components/satisfication";
import ContactForm from "./components/contact";
export default function App() {
  return (
    <>
      {/* <About/> */}
      {/* <ServicesPage/>
       */}

      <Navbar className="bg-red" />
      <div className="banner">
        <Banner />
        <div className="py-100 gap-6">
          <CardList />
        </div>
        <div className="py-100 gap-4">
          <Carousel />
        </div>
  
      </div>
      <div>
        <Satisfication />
      </div>
      <div>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
