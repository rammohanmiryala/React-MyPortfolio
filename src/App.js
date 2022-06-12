import React from "react";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/intro";
import ContactUs from "./components/ContactUs/contactUs";
import AboutUs from "./components/AboutUs/aboutus";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div>
      <Header />
      <Intro /> 
      <AboutUs /> 
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default App;
