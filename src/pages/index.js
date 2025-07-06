import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import Pricing from"@/components/Pricing";
import CareCheck from "@/components/CareCheck";
import WellbeingSection from "@/components/WellbeingSection";
import Question from "@/components/Question";
import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState(0);
  return (
    <div>
      {/* <Navbar cart={cart}/> */}
      <Hero />
      <Steps/>
      <Pricing/>
      <CareCheck/>
      <WellbeingSection/>
      <Question setCart={setCart}/>
    </div>
  );
}
