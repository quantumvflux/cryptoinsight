import React from "react";
import Image from "next/image";
import image from "./assets/Financial-Management.svg";
import { Card } from "./components";
import { Coin } from "../coins/models/coins.models";
interface Props {
  data: Coin[];
}
const page = ({ data }: Props) => (
  <main
    id="home"
    className="scroll-mt-20 text-white h-screen w-screen md:-mb-24 mt-20 flex flex-col md:flex-row justify-center items-center gap-4"
  >
    <Image src={image} alt="Finantial Management" className="sm:w-2/6 w-96 " />
    <article className="z-20 max-w-11/12 flex flex-col justify-center items-center">
      <h2 className="text-5xl font-bold mb-8">
        Cryptocurrency prices <br /> in your pocket
      </h2>
      <h3 className="text-xl">Trending</h3>
      <ul className="flex gap-2 md:gap-4 mt-4">
        <Card name={data[0].name} price={data[0].current_price.toString()}>
          <Image
            src={data[0].image}
            alt={data[0].name}
            width="50"
            height="50"
          />
        </Card>
        <Card name={data[1].name} price={data[1].current_price.toString()}>
          <Image
            src={data[1].image}
            alt={data[1].name}
            width="50"
            height="50"
          />
        </Card>
        <Card name={data[2].name} price={data[2].current_price.toString()}>
          <Image
            src={data[2].image}
            alt={data[2].name}
            width="50"
            height="50"
          />
        </Card>

        <Card
          name={data[3].name}
          price={data[3].current_price.toString().slice(0, 5)}
        >
          <Image
            src={data[3].image}
            alt={data[4].name}
            width="50"
            height="50"
            className="text-4xl"
          />
        </Card>
      </ul>
    </article>
  </main>
);

export default page;
