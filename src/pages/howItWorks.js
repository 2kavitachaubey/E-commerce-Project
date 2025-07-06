import React from "react";
import Link from "next/link";
import HeroHowItWork from "@/components/HeroHowItWork";
import StepsHowItWork from "@/components/StepsHowItWork";

const howItWorks = () => {
  return <div>
    <HeroHowItWork/>
    <StepsHowItWork/>
  </div>;
};

export default howItWorks;
