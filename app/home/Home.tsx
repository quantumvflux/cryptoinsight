import Image from "next/image";
import image from "./assets/Financial-Management.svg";
import {
  BsCurrencyBitcoin,
  FaEthereum,
  SiTether,
  SiDogecoin,
} from "react-icons/all";
import { Card } from "./components";
import { Coin } from "../coins/models/coins.models";

interface Props {
  data: Coin[];
}
const page = ({ data }: Props) => (
  <main className="text-white h-screen w-screen md:-mb-20 flex flex-col md:flex-row justify-center items-center gap-4">
    <Image src={image} alt="Finantial Management" className="sm:w-2/6 w-96 " />
    <article className="z-20 max-w-11/12 flex flex-col justify-center items-center">
      <h2 className="text-5xl font-bold mb-8">
        Cryptocurrency prices <br /> in your pocket
      </h2>
      <h3 className="text-xl">Trending</h3>
      <ul className="flex gap-2 md:gap-4 mt-4">
        <Card name={data[0].name} price={data[0].current_price.toString()}>
          <BsCurrencyBitcoin className="text-4xl" />
        </Card>

        <Card name={data[1].name} price={data[1].current_price.toString()}>
          <FaEthereum className="text-4xl" />
        </Card>

        <Card name={data[2].name} price={data[2].current_price.toString()}>
          <SiTether className="text-4xl" />
        </Card>

        <Card
          name={data[7].name}
          price={data[7].current_price.toString().slice(0, 5)}
        >
          <SiDogecoin className="text-4xl" />
        </Card>
      </ul>
    </article>
  </main>
);

export default page;
