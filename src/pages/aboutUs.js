import React from "react";
import AboutUsHeader from "@/components/AboutUsHeader";
import AboutUsMessage from "@/components/AboutUsMessage";
import AboutUsPrincple from "@/components/AboutUsPrincple";
import CareCheck from "@/components/CareCheck";
import WellbeingSection from "@/components/WellbeingSection";
import Question from "@/components/Question";

const aboutUs = () => {
  return (
    <div>
      <AboutUsHeader />
      <AboutUsMessage/>
      <AboutUsPrincple/>
      <CareCheck/>
      <WellbeingSection/>
      <Question/>
    </div>
  );
};

export default aboutUs;
