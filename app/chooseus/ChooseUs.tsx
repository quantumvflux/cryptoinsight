import image from "./assets/Online Trading.png";
import { RiCoinLine, RiWallet3Line } from "react-icons/ri";
import { Card } from "./components";
import { GiWoodFrame } from "react-icons/gi";
import { HiOutlineUsers } from "react-icons/hi";
import Image from "next/image";
import HeadingH2 from "./components/HeadingH2";

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
            title="Connect your wallet"
            description="CryptoInsight offers direct wallet integration into the app"
          >
            <RiWallet3Line className="text-8xl" />
          </Card>
          <Card
            title="Receive your own NFT's"
            description="Lorem ipsum dolor sit amet"
          >
            <GiWoodFrame className="text-6xl" />
          </Card>
          <Card
            title="Choose your quantity"
            description="Lorem ipsum dolor sit amet"
          >
            <RiCoinLine className="text-6xl" />
          </Card>
          <Card
            title="Secure transactions"
            description="with P2P technology for clean and secure transactions"
          >
            <HiOutlineUsers className="text-7xl w-24" />
          </Card>
        </div>
        <Image src={image} alt="CryptoInsight trading" className="w-96 h-80" />
        <div className="flex flex-col justify-center items-center gap-4 flex-wrap">
          <Card
            title="Connect your wallet"
            description="CryptoInsight offers direct wallet integration into the app"
          >
            <RiWallet3Line className="text-8xl" />
          </Card>
          <Card
            title="Receive your own NFT's"
            description="Lorem ipsum dolor sit amet"
          >
            <GiWoodFrame className="text-6xl" />
          </Card>
          <Card
            title="Choose your quantity"
            description="Lorem ipsum dolor sit amet"
          >
            <RiCoinLine className="text-6xl" />
          </Card>
          <Card
            title="Secure transactions"
            description="with P2P technology for clean and secure transactions"
          >
            <HiOutlineUsers className="text-7xl w-24" />
          </Card>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
