import React from "react";
import { About, Experience, Hero,Tech, Works} from "./index";


function Home() {
  return (
    <div>
      <div className="bg-hero-pattern bg-opacity-100 bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
    </div>
  );
}

export default Home;
