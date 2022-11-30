import React from "react";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/intro";
import ContactUs from "./components/ContactUs/contactUs";
import Myself from "./components/Myself/myself";
import Footer from "./components/Footer/footer";
// import Projects from "./components/Projects/project";
import "bootswatch/dist/solar/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Myself />
      {/* <Projects /> */}
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
