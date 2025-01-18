"use client";
import React, { useState } from "react";
import {  AiOutlineBook, AiOutlineCodepen, AiOutlineShop, AiOutlineUsergroupAdd, AiOutlineCompass, AiOutlineKey } from "react-icons/ai";
import { FaShieldAlt, FaBriefcase } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import Content from "./Content"; 
import Gworkvisa from "./Gworkvisa";
import Gstudentvisa from "./Gstudentvisa";
import Gtouristvisa from "./Gtouristvisa";
import Gdependentvisa from "./Gdependentvisa";
import Gselfempvisa from "./Gselfempvisa";
import Gfreelance from "./Gfreelance";
import UKBvisa from "./UKBvisa";
import UKTvisa from "./UKTvisa";
import UKinnovatorvisa from "./UKinnovatorvisa";
import UKsponvisa from "./UKsponvisa";
import UKstudvisa from "./UKstudvisa";



const countriesData = {
    "Migrate to Germany": {
      description:"",
      image: "https://example.com/germany-image.jpg", // Add the image URL here
      visaTypes: [
        "Germany Opportunity Card",
        "Germany Work Visa",
        "Germany Student Visa",
        "Germany Tourist Visa",
        "Germany Dependent Visa",
        "Germany Self Employment Visa",
        "Germany Freelance Visa"
      ]
    },
    "Migrate to Canada": {
      description: "Canada is one of the top destinations for skilled workers, students, and immigrants. It offers excellent opportunities for work, education, and living.",
      image: "https://example.com/canada-image.jpg", // Add the image URL here
      visaTypes: [
        "Canada Work Visa",
        "Canada Student Visa",
        "Canada Tourist Visa",
        "Canada Permanent Residency Visa",
        "Canada Family Sponsorship Visa"
      ]
    },
    "Migrate to United States": {
      description: "The US offers a diverse range of opportunities for professionals, students, and investors. It’s home to world-renowned universities and a robust job market.",
      image: "https://example.com/us-image.jpg", // Add the image URL here
      visaTypes: [
        "USA Student Visa",
        "USA Tourist Visa",
        "USA Business Visa",
        "USA H1B Visa",
        "USA Investor Visa"
      ]
    },
    "Migrate to Australia": {
      description: "Australia offers a wide variety of immigration pathways for skilled workers, students, and business owners. It's known for its high quality of life.",
      image: "https://example.com/australia-image.jpg", // Add the image URL here
      visaTypes: [
        "Australia Student Visa",
        "Australia Tourist Visa",
        "Australia Business Visa",
        "Australia Work Visa",
        "Australia Family Visa",
        "Australia Dependent Visa",
        "Australia Work Visa",
        "Australia Sponsorship Visa"
      ]
    },
    "Migrate to United Kingdom": {
      image: "https://example.com/uk-image.jpg", // Add the image URL here
      visaTypes: [
        "UK Student Visa",
        "UK Tourist Visa",
        "UK Business Visa",
        "UK Innovator Visa",
        "UK Sponsorship Visa"
      ]
    },
    "Migrate to New Zealand": {
      description: "New Zealand is an attractive destination for skilled workers, with high demand in various sectors like agriculture, construction, and healthcare.",
      image: "https://example.com/nz-image.jpg", // Add the image URL here
      visaTypes: [
        "New Zealand Permanent Resident Visa",
        "New Zealand Skilled Work Visa",
        "New Zealand Student Visa",
        "New Zealand Business Visa",
        "New Zealand Tourist Visa",
        "New Zealand Dependent Visa",
        "New Zealand Work Visa"
      ]
    },
    "Migrate to South Africa": {
      description: "South Africa offers various opportunities for skilled workers and entrepreneurs in sectors such as healthcare, agriculture, and more.",
      image: "https://example.com/south-africa-image.jpg", // Add the image URL here
      visaTypes: [
        "South Africa Critical Skills Visa",
        "South Africa General Work Visa",
        "South Africa Business Visa",
        "South Africa Tourist Visa"
      ]
    },
    "Migrate to Hong Kong": {
      description: "Hong Kong is a global hub for finance and business, providing numerous opportunities for professionals in various sectors.",
      image: "https://example.com/hong-kong-image.jpg", // Add the image URL here
      visaTypes: [
        "Hong Kong Student Visa",
        "Hong Kong Employment Visa",
        "Hong Kong Business Visa",
        "Hong Kong Tourist Visa",
        "Hong Kong Dependent Visa",
        "Hong Kong Work Visa"
      ]
    },
    "Migrate to Denmark": {
      description: "Denmark offers excellent opportunities for skilled workers and students, known for its high standard of living and work-life balance.",
      image: "https://example.com/denmark-image.jpg", // Add the image URL here
      visaTypes: [
        "Denmark Student Visa",
        "Denmark Work Permit Visa",
        "Denmark Tourist Visa",
        "Denmark Business Visa"
      ]
    },
    "Migrate to UAE": {
      description: "The UAE provides a wide range of visa options for professionals, investors, and students. It’s known for its vibrant economy and high quality of life.",
      image: "https://example.com/uae-image.jpg", // Add the image URL here
      visaTypes: [
        "UAE Student Visa",
        "UAE Golden Visa",
        "UAE Work Visa",
        "UAE Green Visa",
        "UAE Tourist Visa"
      ]
    }
  };

const Migrate = () => {
  const [selectedCountry, setSelectedCountry] = useState(null); // No country selected initially
  const [selectedVisa, setSelectedVisa] = useState(null); // To store selected visa type
  const [showVisaTypes, setShowVisaTypes] = useState(false); // State to toggle between country list and visa types
  const [viewingVisaDetail, setViewingVisaDetail] = useState(false); // State for viewing details of a specific visa

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSelectedVisa(null); // Reset selected visa when country is selected
    setShowVisaTypes(true); // Show visa types after country selection
    setViewingVisaDetail(false); // Reset the visa detail view
  };

  const handleVisaSelect = (visa) => {
    setSelectedVisa(visa);
  };

  const handleBackToCountries = () => {
    setShowVisaTypes(false); // Go back to the countries list
    setViewingVisaDetail(false); // Reset visa detail view
  };

  const handleBackToVisaTypes = () => {
    setViewingVisaDetail(false); // Go back to the visa types list
  };

  const getIconForVisaType = (visaType) => {
    return (
      <div className="bg-gray-100 p-2 rounded-full">
        {visaType.includes("Student") && <AiOutlineBook className="h-6 w-6 text-orange-500" />}
        {visaType.includes("Work") && <AiOutlineCodepen className="h-6 w-6 text-orange-500" />}
        {visaType.includes("Business") && <AiOutlineShop className="h-6 w-6 text-orange-500" />}
        {visaType.includes("Tourist") && <AiOutlineCompass className="h-6 w-6 text-orange-500" />}
        {visaType.includes("Family") && <AiOutlineUsergroupAdd className="h-6 w-6 text-orange-500" />}
        {visaType.includes("Golden") && <FaShieldAlt className="h-6 w-6 text-orange-500" />}
        {visaType.includes("Permanent Resident") && <AiOutlineKey className="h-6 w-6 text-orange-500" />}
        {!visaType.includes("Student") && !visaType.includes("Work") && !visaType.includes("Business") && !visaType.includes("Tourist") && !visaType.includes("Family") && !visaType.includes("Golden") && !visaType.includes("Permanent Resident") && <FaBriefcase className="h-6 w-6 text-orange-500" />}
      </div>
    );
  };

  return (

    
    <section className="py-10 bg-gradient-to-bl from-white to-orange-50">
  <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8 mt-5">
    {/* Left Sidebar (Country or Visa List) */}
    <div className="w-full lg:w-[27%] sticky top-0 h-full mb-2 lg:mb-0">
      <h2 className="text-2xl font-bold mb-6 uppercase text-center tracking-wide" style={{color:'rgb(220, 4, 4)'}}>
        {viewingVisaDetail ? "Visa Details" : selectedVisa ? "Visa Types" : "Countries to Migrate .."}
      </h2>

      <ul className="space-y-3 text-gray-700">
        {/* Show countries list if not in visa types view */}
        {!showVisaTypes && !viewingVisaDetail &&
          Object.keys(countriesData).map((country, index) => (
            <li
              key={index}
              onClick={() => handleCountrySelect(country)}
              className={`cursor-pointer hover:text-black hover:bg-custom-blue transition duration-300 px-6 py-2 rounded-lg shadow-md transform hover:scale-105 flex justify-between items-center ${
                country === selectedCountry ? "bg-custom-blue text-black" : ""
              }`}
            >
              <span>{country}</span>
              <AiFillCaretRight className="h-4 w-4 text-gray-900" />
            </li>
          ))}

        {/* Show visa types if in visa types view */}
        {showVisaTypes &&
          countriesData[selectedCountry]?.visaTypes.map((visa, index) => (
            <li
              key={index}
              onClick={() => handleVisaSelect(visa)}
              className={`cursor-pointer hover:text-black hover:bg-custom-blue transition duration-300 px-4 py-2 rounded-lg shadow-md transform hover:scale-105 flex justify-between items-center ${
                visa === selectedVisa ? "bg-custom-blue text-black" : ""
              }`}
            >
              <span>{visa}</span>
              {getIconForVisaType(visa)}
            </li>
          ))}
      </ul>

      {/* Back button to go back to countries list */}
      {showVisaTypes && !viewingVisaDetail && (
        <button
          onClick={handleBackToCountries}
          className="mt-6 px-4 py-2 bg-gray-950 text-white rounded-lg shadow-md hover:bg-teal-950 transition duration-300 w-full"
        >
          Back to Countries
        </button>
      )}

      {/* Back button to go back to visa types */}
      {viewingVisaDetail && (
        <button
          onClick={handleBackToVisaTypes}
          className="mt-6 px-4 py-2 bg-gray-950 text-white rounded-lg shadow-md hover:bg-teal-950 transition duration-300 w-full"
        >
          Back to Visa Types
        </button>
      )}
    </div>

    {/* Right Content (Country description and visa details) */}
    <div className="w-full lg:w-[70%]">
      {/* Display default content if no country selected */}
      {!selectedCountry ? (
         <div>
          <Content />
        
       </div>
       
      ) : (
        <>
          {!viewingVisaDetail ? (
            <>
              {!selectedVisa ? (
                <>
                  {/* <h3 className="text-3xl font-semibold text-black mb-4 text-center">{selectedCountry}</h3> */}
                  <p className="text-lg text-gray-600 mb-8 text-center">{countriesData[selectedCountry]?.title}</p>
                  <p className="text-lg text-gray-600 mb-8 text-center">
                {countriesData[selectedCountry]?.description}
              </p>
                  {/* Display country image below the description */}
                  <div className="text-center">
                    <image
                      src={countriesData[selectedCountry]?.image}
                      alt={selectedCountry}
                      className="mx-auto mt-4 max-w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  {/* Render Content component only for "Migrate to Germany" */}
              {selectedCountry === "Migrate to Germany" && <Content />}
              {selectedCountry === "Migrate to United Kingdom" && <UKstudvisa />}
                </>
              ) : (
                <>
                  <h3 className="text-3xl font-semibold text-black mb-4 text-center"></h3>
                  <p className="text-lg text-gray-600 mb-8 text-center">
                   {/* {selectedVisa} for {selectedCountry}. */}
                  </p>
                  {/* Render Content component for "Germany Opportunity Card" */}
              {selectedCountry === "Migrate to Germany" && selectedVisa === "Germany Opportunity Card" && <Content />}
              {selectedCountry === "Migrate to Germany" && selectedVisa === "Germany Work Visa" && <Gworkvisa />}
              {selectedCountry === "Migrate to Germany" && selectedVisa === "Germany Student Visa" && <Gstudentvisa />}
              {selectedCountry === "Migrate to Germany" && selectedVisa === "Germany Tourist Visa" && <Gtouristvisa />}
              {selectedCountry === "Migrate to Germany" && selectedVisa === "Germany Dependent Visa" && <Gdependentvisa />}
              {selectedCountry === "Migrate to Germany" && selectedVisa === "Germany Self Employment Visa" && <Gselfempvisa />}
              {selectedCountry === "Migrate to Germany" && selectedVisa === "Germany Freelance Visa" && <Gfreelance />}
              {selectedCountry === "Migrate to United Kingdom"  && selectedVisa === "UK Business Visa" && <UKBvisa />}
              {selectedCountry === "Migrate to United Kingdom" && selectedVisa === "UK Tourist Visa" && <UKTvisa /> }
              {selectedCountry === "Migrate to United Kingdom" && selectedVisa === "UK Innovator Visa" && <UKinnovatorvisa />}
             {selectedCountry === "Migrate to United Kingdom" && selectedVisa === "UK Sponsorship Visa" && <UKsponvisa />}
             {selectedCountry === "Migrate to United Kingdom" && selectedVisa === "UK Student Visa" && <UKstudvisa />}
                </>
                
                
              )}
              
            </>
          ) : (
            <>
              <h3 className="text-3xl font-semibold text-black mb-4 text-center">Details for {selectedVisa}</h3>
              <p className="text-lg text-gray-600 mb-8 text-center">
                Here you can find all the information about {selectedVisa} for {selectedCountry}.
              </p>
            </>
          )}
        </>
      )}
      
    </div>
  </div>
</section>

  );
};

export default Migrate;
