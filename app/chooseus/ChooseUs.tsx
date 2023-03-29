import React from "react";
import image from "./assets/Online Trading.png";
import { Card } from "./components";
import Image from "next/image";
import HeadingH2 from "./components/HeadingH2";
import { AiOutlineLock, AiOutlineMobile } from "react-icons/ai";
import { BiCoin, BiTrendingUp } from "react-icons/bi";
import { MdSentimentVerySatisfied } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";

const ChooseUs = () => {
  return (
    <>
      <HeadingH2 text="Why you should choose us?" />
      <section
        id="choose"
        className="scroll-mt-52 flex flex-col xl:flex-row max-w-11/12 items-center m-auto justify-center gap-4"
      >
        <div className="flex flex-col justify-center items-center gap-4 flex-wrap">
          <Card
            title="Instant Transactions"
            description="Users can quickly transfer funds between wallets without having to wait for confirmation times."
          >
            <BsLightningCharge className="text-8xl" />
          </Card>
          <Card
            title="Advanced Security Measures"
            description="Encrypted communications and secure cold storage helps ensure that user funds remain safe from potential cyber attacks."
          >
            <AiOutlineLock className="text-9xl" />
          </Card>
          <Card
            title="Low Fees"
            description="users can easily send and receive funds without worrying about expensive charges eating into their balances."
          >
            <BiCoin className="text-9xl" />
          </Card>
        </div>
        <Image src={image} alt="CryptoInsight trading" className="w-96 h-80" />
        <div className="flex flex-col justify-center items-center gap-4 flex-wrap">
          <Card
            title="Mobile Compatibility"
            description="users can access their accounts and manage their crypto investments on-the-go from their smartphones and tablets."
          >
            <AiOutlineMobile className="text-9xl" />
          </Card>
          <Card
            title="Real-Time Market Data"
            description="Our service allow to stay up-to-date on the latest price movements and trends in the crypto markets, helping users make informed investment decisions."
          >
            <BiTrendingUp className="text-9xl" />
          </Card>
          <Card
            title="User-Friendly Interface"
            description="To make it easy for users to navigate the platform, manage their accounts, and execute trades, even if they are new to crypto investing."
          >
            <MdSentimentVerySatisfied className="text-8xl" />
          </Card>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
