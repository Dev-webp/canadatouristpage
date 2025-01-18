"use client";

import { useState } from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Two from "./components/Two";
import Text from "./components/Text";
import Footer from "./components/Footer";

const ContactPage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
   <div style={{ marginTop: '5%', zIndex: 10, position: 'relative' }}><Nav />
    
   </div>
      <div
        className={`relative bg-cover bg-center min-h-screen ${isImageLoaded ? 'bg-loaded' : 'bg-loading'}`}
        style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/close-up-german-flag-black-wooden-background-3d-render_53060-165.jpg?w=1060')" }}
        onLoad={handleImageLoad}
      >
        
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between p-10 gap-10 min-h-screen">
  {/* Text Section */}
  <div className="w-full lg:w-1/2 lg:ml-16 lg:mt-14">
    <Text />
  </div>
        
       
  <div>
  <Form />
</div>

      </div>
      </div>
      <Two /> 
      <Footer />
    </>
  );
};

export default ContactPage;
